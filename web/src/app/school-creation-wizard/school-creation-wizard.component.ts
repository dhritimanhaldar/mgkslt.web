import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';
import { AppNotificationService } from '../services/app-notification.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule, MatTableModule, MatTableDataSource } from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
declare var $: any;

//school object
export class school {
  	public id: Number;
    public name: string;
    public address: string;
    public city: string;
    public pincode: string;
    public board: Board;
    public state: State;
}

@Component({
  selector: 'app-school-creation-wizard',
  templateUrl: './school-creation-wizard.component.html',
  styleUrls: ['./school-creation-wizard.component.css']
})
export class SchoolCreationWizardComponent implements OnInit {

  private appNetworkService: AppNetworkService;
  private appNotificationService: AppNotificationService;
  public stage = 0;
  public isActive: Boolean = false;
  public isPreviewActive: Boolean = false;
  public schoolImagePreview;
  public school: school = new school();
  public adminId: Number;

  constructor(private apns: AppNetworkService, private ans: AppNotificationService, public dialog: MatDialog) { 
  	this.appNetworkService = apns;
  	this.appNotificationService = ans;
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

  private setLoaderOn(target) {
  	target.disabled = true;
  	target.innerHTML = "<img src='/role/assets/img/loading.gif' style='width:12px;height:12px'>"
  }

  private setLoaderOff(target) {
  	target.disabled = false;
  	target.innerHTML = "NEXT"
  }

  next(event, nextStage) {
  	this.setLoaderOn(event.target)
  	switch(nextStage) {
  		case 1: this.networkStage1(event.target,success =>  {
  			if(success) {
  				this.stage++;
  				alert("show newxt view")
  			}
  			this.setLoaderOff(event.target)
  		})
  		break;
  		case 2: this.networkStage2(event.target, success => {
  			if(success) {
  				this.stage++;
  				alert("show next view 2")
  			}
  			this.setLoaderOff(event.target)
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
  	var schoolObject = {
  		name: this.school.name,
  		address: this.school.address,
  		city: this.school.city,
  		pincode: this.school.pincode,
  		boardId: this.school.board.id,
  		stateId: this.school.state.id
  	}
  	this.appNetworkService.saveSchoolDetail(schoolObject)
  	.then(d=> {
  		var data = d.json();
  		this.school.id = data.schoolId
  		this.adminId = data.adminId
  		this.appNetworkService.getRoleAuthKey("admin", this.adminId, this.school.id)
  		.then(dt => {
  			
  			if(dt){
  				callback(true)
  			} else {
  				window.location.reload();
  				callback(false)
  			}
  		})
  		.catch(ex => {
  			window.location.reload();
  			callback(false)
  		})
  	})
  	.catch(e => {
        this.appNotificationService.notifyGenericError()
        callback(false)
    });
  }

  private networkStage2(target, callback) {
	
	if(!this.school.name || !this.school.address || !this.school.city || !this.school.pincode || !this.school.board || !this.school.state) {
		this.appNotificationService.notify("One or more fields are missing", "danger")
		callback(false);
		return;
	}
  	var schoolObject = {
  		name: this.school.name,
  		address: this.school.address,
  		city: this.school.city,
  		pincode: this.school.pincode,
  		boardId: this.school.board.id,
  		stateId: this.school.state.id
  	}
  	this.appNetworkService.saveSchoolDetail(schoolObject)
  	.then(d=> {
  		var data = d.json();
  		this.school.id = data.schoolId
  		this.adminId = data.adminId
  		this.appNetworkService.getRoleAuthKey("admin", this.adminId, this.school.id)
  		.then(dt => {
  			
  			if(dt){
  				callback(true)
  			} else {
  				window.location.reload();
  				callback(false)
  			}
  		})
  		.catch(ex => {
  			window.location.reload();
  			callback(false)
  		})
  	})
  	.catch(e => {
        this.appNotificationService.notifyGenericError()
        callback(false)
    });
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
  	switch(this.stage) {
  		case 0: this.showImagePreview(event.dataTransfer.files[0])
  			break;
  	}
  }

  changeListener(event) {
  	switch(this.stage) {
  		case 0: this.showImagePreview(event.target.files[0])
  			break;
  	}
  }

  showImagePreview(file) {
  	var reader:FileReader = new FileReader();
  	var self = this;
  	reader.onload = function (event) {
        self.schoolImagePreview = reader.result
        self.isPreviewActive = true;
    }
    reader.readAsDataURL(file);
  }

  clearPreview() {
  	this.schoolImagePreview = null;
  	this.isPreviewActive = false;
  }

  
  ngOnInit() {
      
  }

}

export interface Board {
	 name: string;
	 id: number;
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

export interface State {
	 name: string;
	 id: number;
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
