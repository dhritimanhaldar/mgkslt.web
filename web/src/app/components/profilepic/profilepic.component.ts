import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
	selector: 'app-profile-pic',
	templateUrl: './profilepic.component.html',
	styleUrls: ['./profilepic.component.css']
})
export class ProfilePicComponent implements OnInit {

	@Input() src:string;
	@Input() name:string;

	constructor() { 
	}

	ngOnInit() {

	}
}
