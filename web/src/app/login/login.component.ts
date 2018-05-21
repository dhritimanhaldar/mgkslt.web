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
        if(d._body === "ACTIVE") {
          window.location.reload();
        } else if(d._body == "REG_PASSWORD_CHANGE_PENDING"){
          this.appNotificationService.notify("Your account is not actived yet. Please go to the app to activte it", "info")
          Utils.markActive(button, buttonContent)
        } else {
          Utils.markActive(button, buttonContent)
        }
      }).catch(e => {
        Utils.markActive(button, buttonContent)
        if(e.status >= 400) {
          this.appNotificationService.notify("Invalid credentials", "danger")
        } else if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        }
      })
    } else {
      if(!this.user.validatePhone()) {
         this.appNotificationService.notify("Phone number is invalid", "danger")
       }
       if(!this.user.validatePassword()) {
         this.appNotificationService.notify("Incorrect Password", "danger")
       }
    }
  }
  
  ngOnInit() {
    if(this.appNetworkService.verifyIfLoggedIn()) {
      this.router.navigateByUrl("/role")
    }
  }

}
