import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule, MatTableModule, MatTableDataSource, MatSelect, MatCheckbox } from '@angular/material';
import { ProfilePicComponent } from '../profilepic/profilepic.component'

@Component({
	selector: 'app-student-input-form',
	templateUrl: './studentinputform.component.html',
	styleUrls: ['./studentinputform.component.css']
})
export class StudentInputFormComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<StudentInputFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { 
	}

	ngOnInit() {

	}

	cancel(event) {
		this.dialogRef.close();
	}
}
