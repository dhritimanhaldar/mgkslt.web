import { Component, OnInit } from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';
import { User } from '../models/User'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private appNetworkService: AppNetworkService;
  public user: User = new User();
  
  constructor(private apns: AppNetworkService) { 
  	this.appNetworkService = apns;
  }

  login() {
    this.user.validatePhone()
  }
  
  ngOnInit() {
     
  }

}
