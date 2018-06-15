import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule, MatTableModule, MatTableDataSource, MatSelect, MatCheckbox } from '@angular/material';
import { ProfilePicComponent } from '../profilepic/profilepic.component'
import { Parent } from '../../models/Parent'
import { User } from '../../models/User'
import { School } from '../../models/School'
import { Class } from '../../models/Class'
import { Student } from '../../models/student'
import { Utils } from '../../Utils'

@Component({
	selector: 'app-student-input-form',
	templateUrl: './studentinputform.component.html',
	styleUrls: ['./studentinputform.component.css']
})
export class StudentInputFormComponent implements OnInit {

	public student: Student
	public school: School

	public classSectionObject = {}
	public genders = Utils.getGenders()

	constructor(
		public dialogRef: MatDialogRef<StudentInputFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { 

		this.school = data.school;
		if(data.student) {
			this.student = data.student
		} else {
			this.student = new Student()
			var defaultParent = new Parent()
			var user: User = new User()
			defaultParent.user = user;
			var parentList:[Parent] = [defaultParent];
			var clazz: Class = new Class()
			this.student.clazz = clazz
			this.student.parentList = parentList
		}

		for(var index in this.school.classList) {
			var cl = this.school.classList[index]
			var sectionArray = this.classSectionObject[cl.standard]
			if(!sectionArray) {
				sectionArray = []
				this.classSectionObject[cl.standard] = sectionArray
			}
			var obj = {"section": cl.section, "id": cl.id}
			sectionArray.push(obj)
		}
	}

	ngOnInit() {

	}

	cancel(event) {
		this.dialogRef.close();
	}

	addParent(event) {
		var parent = new Parent()
		var user: User = new User()
		parent.user = user;
		this.student.parentList.push(parent)
	}

	removeParent(index) {
		if(index > 0) {
			this.student.parentList.splice(index, 1)
		}
	}

	getFirstName(name: string): string{
		if(name)
			return name.split(" ")[0]
		else
			return ""
	}
}
