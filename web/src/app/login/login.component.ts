import { Component, OnInit } from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private appNetworkService: AppNetworkService;
  
  constructor(private apns: AppNetworkService) { 
  	this.appNetworkService = apns;

  }
  
  ngOnInit() {
      // this.loading = true;
     
      // this.appNetworkService.getUserRole().then(d=>{
      // 	this.loading = false;
      // 	this.roleList = d;
      // 	if(!this.roleList.hasOwnProperty("ADMIN") && !this.roleList.hasOwnProperty("TEACHER") && !this.roleList.hasOwnProperty("PARENT")) {
      // 		this.showEmptyAdminView = true;
      // 	} else {
      //     if(this.roleList.hasOwnProperty("ADMIN") ){
      //       var adminSchoolData = this.roleList["ADMIN"]
      //       for(var roleData of adminSchoolData) {
      //         roleData.school.visitUrl = roleData.school.stage < 5 ? '/role/school/' + roleData.school.id : '/portal/' + roleData.school.id;
      //       }
      //     } else if(this.roleList.hasOwnProperty("TEACHER") ){
      //       var teacherSchoolData = this.roleList["TEACHER"]
      //       for(var roleData of teacherSchoolData) {
      //         roleData.school.visitUrl = roleData.school.stage < 5 ? '' : '/portal/' + roleData.school.id;
      //       }
      //     } else if(this.roleList.hasOwnProperty("PARENT") ){
      //       var parentSchoolData = this.roleList["PARENT"]
      //       for(var roleData of parentSchoolData) {
      //         roleData.school.visitUrl = roleData.school.stage < 5 ? '' : '/portal/' + roleData.school.id;
      //       }
      //     }
      //   }
      // });
  }

}
