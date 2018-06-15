import { Component, OnInit, Directive, Input, Output } from '@angular/core';
import { UploaderComponent } from '../uploader/uploader.component'
import { StudentInputFormComponent } from '../studentinputform/studentinputform.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule, MatTableModule, MatTableDataSource, MatSelect, MatCheckbox } from '@angular/material';
import { School } from '../../models/School';

@Component({
	selector: 'app-student-input',
	templateUrl: './studentinput.component.html',
	styleUrls: ['./studentinput.component.css']
})
export class StudentInputComponent implements OnInit {

	@Input() school:School;

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
			height: "75vh",
			disableClose:true,
			data: { student: null, school: this.school }
		});

		dialogRef.afterClosed().subscribe(result => {
			
		});
	}

}
