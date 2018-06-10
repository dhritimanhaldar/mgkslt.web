import { Component, OnInit, Directive } from '@angular/core';
import { UploaderComponent } from '../uploader/uploader.component'

@Component({
  selector: 'app-student-input',
  templateUrl: './studentinput.component.html',
  styleUrls: ['./studentinput.component.css']
})
export class StudentInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

  onFileUpload(event) {
  	console.log(event)
  }
  
}
