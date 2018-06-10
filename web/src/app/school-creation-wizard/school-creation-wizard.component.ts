import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';
import { AppNotificationService } from '../services/app-notification.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule, MatTableModule, MatTableDataSource, MatSelect, MatCheckbox } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Utils } from '../Utils'
import { Router, ActivatedRoute } from '@angular/router';
import { School } from '../models/School';
import { Board } from '../models/Board';
import { State } from '../models/State';
import { StudentInputComponent } from '../components/studentInput/studentinput.component';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-school-creation-wizard',
  templateUrl: './school-creation-wizard.component.html',
  styleUrls: ['./school-creation-wizard.component.css']
})
export class SchoolCreationWizardComponent implements OnInit {

  private appNetworkService: AppNetworkService;
  private appNotificationService: AppNotificationService;
  public isActive: Boolean = false;
  public isPreviewActive: Boolean = false;
  public schoolImagePreview;
  public schoolImageName;
  public school: School = new School();
  public adminId: Number;
  private maxSectionCount = 20
  private minSectionCount = 1
  public sectionCountArray: Number[] = [];
  private router: Router;
  public isDataAvailable:boolean = false;
  public classStructure;
  private uploadedFile;

  constructor(private apns: AppNetworkService, private ans: AppNotificationService,
   public dialog: MatDialog, private rtr: Router, private route: ActivatedRoute,
    public studentInputComponent: StudentInputComponent) { 

  	this.appNetworkService = apns;
  	this.appNotificationService = ans;
    this.router = rtr;
    for(var index = this.minSectionCount; index <= this.maxSectionCount; index++) {
      this.sectionCountArray.push(index)
    }
    this.classStructure = [{
      "levelName": "Preschool",
      "structure": [
        {
          "standard": "Pre-Nursery",
          "selected": false,
          "sectionCount": 1
        },
        {  
          "standard": "Nursery",
          "selected": false,
          "sectionCount": 1
        },
        {
          "standard": "U.K.G",
          "selected": false,
          "sectionCount": 1
        },
        {
          "standard": "L.K.G",
          "selected": false,
          "sectionCount": 1
        }
      ]
    }];
    this.classStructure.push({
      "levelName": "Middle School",
      "structure": [
        {
          "standard": "1st",
          "selected": false,
          "sectionCount": 1
        },
        {
          "standard": "2nd",
          "selected": false,
          "sectionCount": 1
        },
        {
          "standard": "3rd",
          "selected": false,
          "sectionCount": 1
        }
      ]
    })
    for(var index = 4; index <= 5; index++) {
      this.classStructure[1].structure.push({
        "standard": index + "th",
        "selected": false,
        "sectionCount": 1
      })
    }
    this.classStructure.push({
      "levelName": "High School",
      "structure": []
    })
    for(var index = 6; index <= 12; index++) {
      this.classStructure[2].structure.push({
        "standard": index + "th",
        "selected": false,
        "sectionCount": 1
      })
    }
  }

  openBoardDialog(): void {
    let dialogRef = this.dialog.open(BoardDialog, {
    	width: "45vw",
    	height: "60vh",
    	data: {selectedBoard: this.school.board}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      	this.school.board = result;
    });
  }

    openStateDialog(): void {
    let dialogRef = this.dialog.open(StateDialog, {
    	width: "45vw",
    	height: "60vh",
    	data: {selectedState: this.school.state}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      	this.school.state = result;
    });
  }

  abort(event) {
    var button = event.target
    var originalTargetHtml = button.innerHTML
    Utils.markBusy(button)
    this.appNetworkService.deleteCookie("roleauth")
    this.router.navigateByUrl("/role")
    Utils.markActive(button, originalTargetHtml)
  }

  next(event, nextStage) {
    var button = event.target
    var originalTargetHtml = button.innerHTML
    Utils.markBusy(button)
  	switch(nextStage) {
  		case 1: this.networkStage1(event.target,success =>  {
        if(success){
           this.router.navigateByUrl("/role/schoolCreate/" + this.school.id)
        } else {
          Utils.markActive(button, originalTargetHtml)
        }
  		})
  		break;
  		case 2: this.networkStage2(event.target, success => {
  			if(success){
            this.ngOnInit()
        } else {
          Utils.markActive(button, originalTargetHtml)
        }
  		})
  		break;
      case 3: this.networkStage3(event.target, success => {
        if(success){
            this.ngOnInit()
        } else {
          Utils.markActive(button, originalTargetHtml)
        }
      })
      break;
      case 4: this.networkStage4(event.target, success => {
        if(success){
            this.ngOnInit()
        } else {
          Utils.markActive(button, originalTargetHtml)
        }
      })
      break;
      case 5: this.networkStage5(event.target, success => {
        if(success){
            this.router.navigateByUrl("/role")
        } else {
          Utils.markActive(button, originalTargetHtml)
        }
      })
      break;
  	}
  }

  private networkStage1(target, callback) {
  	if(!this.school.name || !this.school.address || !this.school.city || !this.school.pincode || !this.school.board || !this.school.state) {
  		this.appNotificationService.notify("One or more fields are missing", "danger")
  		callback(false);
  		return;
  	}
    if(this.uploadedFile && !Utils.checkFileExtention(this.uploadedFile.name, "jpg") && !Utils.checkFileExtention(this.uploadedFile.name, "jpeg") && !Utils.checkFileExtention(this.uploadedFile.name, "png")) {
      this.appNotificationService.notify("Please upload a jpg, jpeg or png image file", "danger")
      callback(false);
      return;
    }
  	var schoolObject = {
  		name: this.school.name,
  		address: this.school.address,
  		city: this.school.city,
  		pincode: this.school.pincode,
  		boardId: this.school.board.id,
  		stateId: this.school.state.id,
      file: this.uploadedFile
  	}
  	this.appNetworkService.saveSchoolDetail(schoolObject)
  	.then(d=> {
  		var data = d.json();
  		this.school.id = data.map.schoolId
  		this.adminId = data.map.adminId
      callback(true);
  	})
  	.catch(e => {
      if(e.status >= 500) {
        this.appNotificationService.notifyGenericError()
      }else if(e.status == 400 ) {
        this.appNotificationService.notify("Something is wrong with the input. Please check.","danger")
      } else if(e.status == 401){
        this.appNetworkService.deleteAllCookies()
        window.location.reload();
      }
      callback(false)
    });
  }

  private networkStage2(target, callback) {
     var reqBody = [];
     for(var index in this.classStructure) {
       var cs = this.classStructure[index];
       for(var subindex in cs.structure) {
         var st = cs.structure[subindex];
         if(st.selected) {
           reqBody.push({
             "standard": st.standard,
             "sectionCount": st.sectionCount
           })
         }
       }
     }

     if(reqBody.length == 0) {
       this.appNotificationService.notify("You must select atleast 1 class","danger")
       callback(false)
     } else {
       this.appNetworkService.saveClassDetail(reqBody, this.school.id)
       .then(d => {
         callback(true);
       })
       .catch(e => {
         if(e.status >= 500) {
            this.appNotificationService.notifyGenericError()
          } else if(e.status == 400 ) {
            this.appNotificationService.notify("Something is wrong with the input. Please check.","danger")
          } else if(e.status == 401){
            this.appNetworkService.deleteAllCookies()
            window.location.reload();
          }
         callback(false)
       })
     }
  }

  private networkStage3(target, callback) {
    if(this.uploadedFile == null || !Utils.checkFileExtention(this.uploadedFile.name, "csv")) {
      this.appNotificationService.notify("Please upload the student data CSV file","danger")
      callback(false)
    } else {
      this.appNetworkService.uploadStudentFile(this.uploadedFile, this.school.id)
     .then(d => {
       callback(true);
     })
     .catch(e => {
       if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        }else if(e.status == 400 ) {
          var error = JSON.parse(e._body).map.error
          this.appNotificationService.notify(error,"danger")
        } else if(e.status == 401){
          this.appNetworkService.deleteAllCookies()
          window.location.reload();
        }
       callback(false)
     })
    }
  }

  private networkStage4(target, callback) {
    if(this.uploadedFile == null || !Utils.checkFileExtention(this.uploadedFile.name, "csv")) {
      this.appNotificationService.notify("Please upload the teacher data CSV file","danger")
      callback(false)
    } else {
      this.appNetworkService.teacherFileUpload(this.uploadedFile, this.school.id)
     .then(d => {
       callback(true);
     })
     .catch(e => {
       if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        }else if(e.status == 400 ) {
          var error = JSON.parse(e._body).map.error
          this.appNotificationService.notify(error,"danger")
        } else if(e.status == 401){
          this.appNetworkService.deleteAllCookies()
          window.location.reload();
        }
       callback(false)
     })
    }
  }

  private networkStage5(target, callback) {
    if(this.uploadedFile == null || !Utils.checkFileExtention(this.uploadedFile.name, "csv")) {
      this.appNotificationService.notify("Please upload the subject data CSV file","danger")
      callback(false)
    } else {
      this.appNetworkService.studentTeacherMappingFileUpload(this.uploadedFile, this.school.id)
     .then(d => {
       this.appNotificationService.notify("Congratulations! Your school has been successfully created", "info")
       callback(true);
     })
     .catch(e => {
       if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        }else if(e.status == 400 ) {
          var error = JSON.parse(e._body).map.error
          this.appNotificationService.notify(error,"danger")
        } else if(e.status == 401){
          this.appNetworkService.deleteAllCookies()
          window.location.reload();
        }
       callback(false)
     })
    }
  }

  dragStart(event) {
  	this.isActive = true;
  }
 
  dragEnd(event) {
  	this.isActive = false;
  }

  dragOver(event) {
  	event.preventDefault();
  	event.stopPropagation();
  }
 
  onDrop(event) {
  	event.preventDefault();
  	this.isActive = false;
  	switch(this.school.stage) {
  		case 0: this.showImagePreview(event.dataTransfer.files[0])
  			break;
      case 2:
      case 3:
      case 4: this.showFileInformation(event.dataTransfer.files[0])
        break;
  	}
  }

  changeListener(event) {
  	switch(this.school.stage) {
  		case 0: this.showImagePreview(event.target.files[0])
  			break;
      case 2:
      case 3:
      case 4: this.showFileInformation(event.target.files[0])
        break;
  	}
  }

  showImagePreview(file) {
  	var reader:FileReader = new FileReader();
  	var self = this;
  	reader.onload = function (event) {
        self.schoolImageName = file.name
        self.schoolImagePreview = reader.result
        self.uploadedFile = file;
        self.isPreviewActive = true;
    }
    reader.readAsDataURL(file);
  }

  showFileInformation(file) {
    this.schoolImageName = file.name
    this.uploadedFile = file
    this.isPreviewActive = true;
  }

  clearPreview() {
  	this.schoolImagePreview = null;
  	this.isPreviewActive = false;
    this.schoolImageName = null;
    this.isActive = false;
    this.uploadedFile = null;
  }

  
  ngOnInit() {
    this.isDataAvailable = false;
    this.clearPreview()
    if(this.router.url !== "/role/schoolCreate") {
      if(!this.school.id) {
        this.route.params.subscribe(params => {
          this.school.id =params['id'];
        })
      }
      this.appNetworkService.getSchoolForAdmin(this.school.id)
      .then(d => {
        var data = d.json();
        this.school.id = data.id
        this.school.name = data.name;
        this.school.stage = data.stage;
        this.adminId = data.currentUserAdminId;

        if(!this.appNetworkService.getCookie("roleauth")) {
          this.appNetworkService.getRoleAuthKey("admin", this.adminId, this.school.id)
          .then(dt => {
            if(!dt){
              this.appNotificationService.notifyGenericError()
              window.location.reload();
            } else {
              this.isDataAvailable = true;
            }
          })
          .catch(ex => {
            if(ex.status >= 500) {
              this.appNotificationService.notifyGenericError()
            }else if(ex.status == 400 ) {
              this.appNotificationService.notify("Something is wrong with the input. Please check.","danger")
            } else if(ex.status >= 401){
              this.appNetworkService.deleteAllCookies()
              window.location.reload();
            }
          })
        } else {
          this.isDataAvailable = true;
        }
      })
      .catch(e => {
        if(e.status >= 500) {
          this.appNotificationService.notifyGenericError()
        } else if(e.status == 400 ) {
          this.appNotificationService.notify("Something is wrong with the input. Please check.","danger")
        } else if(e.status >= 401){
          this.appNetworkService.deleteAllCookies()
          window.location.reload();
        }
      })
    } else {
      this.isDataAvailable = true;
    }
  }

}

@Component({
  selector: 'board-dialog',
  templateUrl: 'board-dialog.html',
})
export class BoardDialog {

  public boardList: Board[];
  public boardListCallFailed: Boolean = false;
  public isLoading: Boolean = true;
  private appNetworkService: AppNetworkService;
  public displayedColumns = ["name"]
  public dataSource;
  public selectedBoard: Board;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectBoard(board) {
  	this.selectedBoard = board;
  	this.dialogRef.close(this.selectedBoard);
  }

  constructor(
    public dialogRef: MatDialogRef<BoardDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apns: AppNetworkService) { 

  	this.selectedBoard = data.selectedBoard;
  	this.appNetworkService = apns;
  	this.appNetworkService.getBoardList()
  	.then(d => {
  		let data = d.json();
  		console.log(data)
  		this.boardList = data.list;
  		this.dataSource = new MatTableDataSource(this.boardList);
  		this.isLoading = false;
  		this.boardListCallFailed = false;
  	}).catch(e => {
  		this.isLoading = false;
  		this.boardListCallFailed = true;
  	});
  }

  onNoClick(): void {
    this.dialogRef.close(this.selectedBoard);
  }

}

@Component({
  selector: 'state-dialog',
  templateUrl: 'state-dialog.html',
})
export class StateDialog {

  public stateList: State[];
  public stateListCallFailed: Boolean = false;
  public isLoading: Boolean = true;
  private appNetworkService: AppNetworkService;
  public displayedColumns = ["name"]
  public dataSource;
  public selectedState: State;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectState(state) {
  	this.selectedState = state;
  	this.dialogRef.close(this.selectedState);
  }

  constructor(
    public dialogRef: MatDialogRef<StateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apns: AppNetworkService) { 

  	this.selectedState = data.selectedState;
  	this.appNetworkService = apns;
  	this.appNetworkService.getStateList()
  	.then(d => {
  		let data = d.json();
  		console.log(data)
  		this.stateList = data.list;
  		this.dataSource = new MatTableDataSource(this.stateList);
  		this.isLoading = false;
  		this.stateListCallFailed = false;
  	}).catch(e => {
  		this.isLoading = false;
  		this.stateListCallFailed = true;
  	});
  }

  onNoClick(): void {
    this.dialogRef.close(this.selectedState);
  }

}
