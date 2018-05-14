import { Component, OnInit } from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private appNetworkService: AppNetworkService;
  public loading: boolean = false; 
  public roleList = {};
  public showEmptyAdminView = false;

  constructor(private apns: AppNetworkService) { 
  	this.appNetworkService = apns;

  }
  
  ngOnInit() {
      this.loading = true;
     
      this.appNetworkService.getUserRole().then(d=>{
      	this.loading = false;
      	this.roleList = d;
      	if(!this.roleList.hasOwnProperty("ADMIN") && !this.roleList.hasOwnProperty("TEACHER") && !this.roleList.hasOwnProperty("PARENT")) {
      		this.showEmptyAdminView = true;
      	}
      });
  }

}
