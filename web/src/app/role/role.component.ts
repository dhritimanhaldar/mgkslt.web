import { Component, OnInit } from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';
import { Utils } from '../Utils';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  private appNetworkService: AppNetworkService;
  public loading: boolean = false; 
  public roleList = {};
  public showEmptyAdminView = false;

  constructor(private apns: AppNetworkService) { 
  	this.appNetworkService = apns;

  }

  handleRoleRouting() {
    if(!this.roleList.hasOwnProperty("ADMIN") && !this.roleList.hasOwnProperty("TEACHER") && !this.roleList.hasOwnProperty("PARENT")) {
      this.showEmptyAdminView = true;
    } else {
      if(this.roleList.hasOwnProperty("ADMIN") ){
        var adminSchoolData = this.roleList["ADMIN"]
        for(var roleData of adminSchoolData) {
          roleData.school.visitUrl = roleData.school.stage < 5 ? '/role/schoolCreate/' + roleData.school.id : '/dashboard/school/' + roleData.school.id;
          roleData.school.displayPic = roleData.school.displayPic ? roleData.school.displayPic : "../assets/img/dummy-school-dp.jpg"
          roleData.school.displayUpdatedAt = Utils.getDisplayUpdatedAt(roleData.school.updatedAt)
        }
      } 
      if(this.roleList.hasOwnProperty("TEACHER") ){
        var teacherSchoolData = this.roleList["TEACHER"]
        for(var roleData of teacherSchoolData) {
          roleData.school.visitUrl = '/dashboard/school/' + roleData.school.id;
          roleData.school.displayPic = roleData.school.displayPic ? roleData.school.displayPic : "../assets/img/dummy-school-dp.jpg"
          roleData.school.displayUpdatedAt = Utils.getDisplayUpdatedAt(roleData.school.updatedAt)
        }
      }
      if(this.roleList.hasOwnProperty("PARENT") ){
        var parentSchoolData = this.roleList["PARENT"]
        for(var roleData of parentSchoolData) {
          roleData.student.visitUrl = '/dashboard/student/' + roleData.student.id;
          roleData.student.profilePicUrl = roleData.student.profilePicUrl ? roleData.student.profilePicUrl : "../assets/img/dummy-student-profilepic.png"
          roleData.student.displayUpdatedAt = Utils.getDisplayUpdatedAt(roleData.student.updatedAt)
        }
      }
    }
  }
  
  ngOnInit() {
      this.loading = true;
      // if(this.appNetworkService.getUserRole()) {
      //   this.roleList = this.appNetworkService.getUserRole()
      //   this.handleRoleRouting()
      // } else {
        this.appNetworkService.getUserRoleAsync().then(d=>{
          this.loading = false;
          this.roleList = d;
          this.handleRoleRouting()
        });
      // }
  }

}
