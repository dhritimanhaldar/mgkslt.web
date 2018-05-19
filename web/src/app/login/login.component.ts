import { Component, OnInit } from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';
import { AppNotificationService } from '../services/app-notification.service';
import { User } from '../models/User'
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

  login() {
    if(this.user.validatePhone() && this.user.validatePassword()) {
      
      var phone = this.countryCode + this.user.phone;

      this.appNetworkService.login(phone, this.user.password)
      .then(d => {
        if(d._body === "ACTIVE") {
          this.router.navigateByUrl('/school');
        } else {
          this.appNotificationService.notify("Your account is not actived yet. Please go to the app to activte it", "info")
        }
      }).catch(e => {
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
  
  ngOnInit() {}

}
