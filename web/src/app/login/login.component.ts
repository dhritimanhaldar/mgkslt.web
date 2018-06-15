import { Component, OnInit } from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';
import { AppNotificationService } from '../services/app-notification.service';
import { User } from '../models/User'
import { Utils } from '../Utils'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private appNetworkService: AppNetworkService;
  private appNotificationService: AppNotificationService;
  public user: User = new User();
  private countryCode = "+91-";
  private router: Router;
  public currentView: string = "login"
  public reppassword: string = null;
  public fp_phone: string = null
  public fpauthorization: string = null
  public otp: string = null
  public newPassword: string = null
  public repeatNewPassword: string = null
  private resendOtpInProgress: Boolean = false
  private resendPasswordCookie: string = "or"

  constructor(private apns: AppNetworkService, private ans: AppNotificationService, private rtr: Router) { 
  	this.appNetworkService = apns;
    this.appNotificationService = ans;
    this.router = rtr;
  }

  login(event) {
    var button = event.target;
    if(this.user.validatePhone() && this.user.validatePassword()) {
      
      var phone = this.countryCode + this.user.phone;
      var buttonContent = button.innerHTML
      Utils.markBusy(button)
      this.appNetworkService.login(phone, this.user.password)
      .then(d => {
        var data = d.json();
        var status = data.map.status
        if(status === "ACTIVE") {
          window.location.reload();
        } else if(status == "REG_PASSWORD_CHANGE_PENDING"){
          this.appNotificationService.notify("Your account is not actived yet. Please change your password", "info")
          Utils.markActive(button, buttonContent)
          this.currentView = 'updatePassword'
        } else if(status == "OTP_VERIFICATION_PENDING"){
          this.user.id = data.map.userId
          this.appNotificationService.notify("Your OTP verification is pending", "info")
          Utils.markActive(button, buttonContent)
          this.currentView = 'otp'
        } else {
          Utils.markActive(button, buttonContent)
        }
      }).catch(e => {
        Utils.markActive(button, buttonContent)
        if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        }else if(e.status >= 400) {
          this.appNotificationService.notify("Invalid credentials", "danger")
        }
      })
    } else {
      if(!this.user.validatePhone()) {
         this.appNotificationService.notify("Phone number is invalid", "danger")
       }
       if(!this.user.validatePassword()) {
         this.appNotificationService.notify("Password must be atleast 6 characters long", "danger")
       }
    }
  }

  signup(event){
    var button = event.target
    if(this.user.validatePhone() && this.user.validatePassword() && this.user.validateEmail() && this.user.password == this.reppassword) {

      var user = Object.assign({}, this.user)
      user.phone = this.countryCode + user.phone;
      var buttonContent = button.innerHTML
      Utils.markBusy(button)
      this.appNetworkService.signup(user)
      .then(d=> {
        Utils.markActive(button, buttonContent)
        this.user.id = d.headers.get("Resource-Id")
        this.currentView = "otp"
      }).catch(e => {
        Utils.markActive(button, buttonContent)
        if(e.status == 409) {
          this.appNotificationService.notify("Another user already exists with given phone number or email", "danger")
        } else if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        }
      })
    } else {
      if(!this.user.validatePhone()) {
         this.appNotificationService.notify("Phone number is invalid", "danger")
       }
       if(!this.user.validatePassword()) {
         this.appNotificationService.notify("Password must be atleast 6 characters long", "danger")
       }
       if(!this.user.validateEmail()) {
         this.appNotificationService.notify("Email is invalid", "danger")
       }
       if(this.user.password != this.reppassword) {
         this.appNotificationService.notify("Password and Repeat password do not match", "danger")
       }
    }
  }

  forgotPassword1(event) {
    var button = event.target
    if(!Utils.validatePhone(this.fp_phone)) {
      this.appNotificationService.notify("Phone number is invalid", "danger")
    } else {

      var phn = this.countryCode + this.fp_phone
      var buttonContent = button.innerHTML

      Utils.markBusy(button)

      this.appNetworkService.forgotPassword1(phn)
      .then(d=>{
        Utils.markActive(button, buttonContent)
        this.currentView = "otp"
      })
      .catch(e => {
        Utils.markActive(button, buttonContent)
        if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        } else if (e.status >= 400) {
          this.appNotificationService.notify("No such phone number exists in our records. Please try signing up.", "danger")
        }
      })
    }
  }

  submitOtp(event) {
    if(this.fp_phone) {
      this.forgotPassword2(event)
    } else {
      this.verifyUser(event)
    }
  }

  verifyUser(event) {
    var button = event.target

     var userId = this.user.id + ""
     var otp = this.otp

     var buttonContent = button.innerHTML
     Utils.markBusy(button)

     this.appNetworkService.verifyUser(userId, otp)
     .then(d => {
       Utils.markActive(button, buttonContent)
       this.appNotificationService.notify("Your account has been verified. You can sign in now.", "info")
       this.currentView = "login"
     })
     .catch(e => {
        Utils.markActive(button, buttonContent)
        if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        } else if(e.status == 401) {
          this.appNotificationService.notify("OTP does not match", "danger")
        }
     })
  }

  forgotPassword2(event) {
    var button = event.target

    var phn = this.countryCode + this.fp_phone

    var buttonContent = button.innerHTML
    Utils.markBusy(button)

    this.appNetworkService.forgotPassword2(phn, this.otp)
    .then(d=> {
      Utils.markActive(button, buttonContent)
      this.currentView = "updatePassword"
      this.fpauthorization = d.headers.get("fpauthorization")
    })
    .catch(e => {
      Utils.markActive(button, buttonContent)
      if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
      } else if(e.status >= 400) {
          this.appNotificationService.notify("OTP does not match", "danger")
      }
    })
  }

  updatePassword(event) {
    var button = event.target

    if(!this.newPassword) {
      this.appNotificationService.notify("Password cannot be left blank", "danger")
      return
    }

    if(this.newPassword != this.repeatNewPassword) {
      this.appNotificationService.notify("Passwords do not match", "danger")
      return
    }

    var buttonContent = button.innerHTML
    Utils.markBusy(button)

    this.appNetworkService.updatePasswordWithoutLogin(this.newPassword, this.repeatNewPassword, this.fpauthorization)
    .then(d => {
      Utils.markActive(button, buttonContent)
      this.appNotificationService.notify("Your password has been updated. Please sign in.", "info")
      this.currentView = "login"
    })
    .catch(e => {
      Utils.markActive(button, buttonContent)
      if(e.status >= 500 || e.status == 400) {
        this.appNotificationService.notifyGenericError()
      } else if(e.status == 401) {
        this.appNotificationService.notify("You are not authorized to perform this action", "danger")
      }
    })
  }

  resendOtp() {
    if(!this.resendOtpInProgress && !this.appNetworkService.getCookie(this.resendPasswordCookie)) {

      this.resendOtpInProgress = true;
      var phone = this.fp_phone ? this.fp_phone : this.user.phone
      phone = this.countryCode + phone

      if(phone) {

        this.appNotificationService.notify("An OTP is on the way to your phone!", "info")

        this.appNetworkService.resendOtp(phone)
        .then(d => {
          this.resendOtpInProgress = false;
          this.appNotificationService.notify("OTP has been re-sent to " + phone, "info")
          this.appNetworkService.setCookieWithExpiry(this.resendPasswordCookie,"-", 60)
        })
        .catch(e => {
          this.resendOtpInProgress = false;
          if(e.status >= 500) {
            this.appNotificationService.notifyGenericError()
          } else if(e.status == 401) {
            this.appNotificationService.notify("Please try requesting OTP in some time", "warning")
          }
        })
      } else {
        this.appNotificationService.notify("Please enter a phone number", "danger")
      }
    } else {
      this.appNotificationService.notify("An OTP is already under way. Please wait", "warning")
    }

  }
  
  ngOnInit() {
    if(this.appNetworkService.verifyIfLoggedIn()) {
      this.router.navigateByUrl("/role")
    }
  }

}
