import { Component, OnInit, Directive } from '@angular/core';
import { UploaderComponent } from '../uploader/uploader.component'
import { StudentInputFormComponent } from '../studentinputform/studentinputform.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule, MatTableModule, MatTableDataSource, MatSelect, MatCheckbox } from '@angular/material';

@Component({
	selector: 'app-student-input',
	templateUrl: './studentinput.component.html',
	styleUrls: ['./studentinput.component.css']
})
export class StudentInputComponent implements OnInit {

	public studentInputFormOpen: Boolean = false
	public searchDisabled: Boolean = true

	constructor(public dialog: MatDialog) { }

	ngOnInit() {

	}

	onFileUpload(event) {
		console.log(event)
	}

	showStudentForm(event) {
		let dialogRef = this.dialog.open(StudentInputFormComponent, {
			width: "75vw",
			disableClose:true
		});

		dialogRef.afterClosed().subscribe(result => {
			
		});
	}

}
