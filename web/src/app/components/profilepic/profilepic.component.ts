import { Component, OnInit, Inject, Input, EventEmitter, Output } from '@angular/core';
import { Utils } from '../../Utils';
import { AppNotificationService } from '../../services/app-notification.service';

@Component({
	selector: 'app-profile-pic',
	templateUrl: './profilepic.component.html',
	styleUrls: ['./profilepic.component.css']
})
export class ProfilePicComponent implements OnInit {

	@Input() src:string;
	@Input() name:string;
	@Input() editable:boolean;
	@Output('onUpdate') onUpdate: EventEmitter<File> = new EventEmitter<File>();

	srcSet: boolean;
	private appNotificationService: AppNotificationService;
	private fileObj = null

	constructor(private ans: AppNotificationService) { 
		if(!this.src) {
			this.removePreview()
		} else {
			this.srcSet = true
		}
		this.appNotificationService = ans;
	}

	isValidImageFile(fileType) {
		var ftype = fileType.split("/")[1]
		if(ftype) {
			if(!Utils.getSupportedFileInfo()[ftype]) {
				return false
			}
			return Utils.getSupportedFileInfo()[ftype]["normalizedType"] == "image"
		}
		return false;
	}


	showPreview(event) {
		if(event.target.files) {
			var file = event.target.files[0]
			if(!Utils.isValidImageFile(file.type)) {
				this.appNotificationService.notify("Not a valid image file", "danger")
				return
			}
			this.generateFileObject(file)
		}
	}

	private generateFileObject(file: File) {
		var reader:FileReader = new FileReader();
		var self = this;
		reader.onload = function (event) {
			self.fileObj = {
				filename: file.name,
				preview: reader.result,
				uploadedFile: file
			}
			self.src = self.fileObj.preview
			self.srcSet = true;
			self.onUpdate.emit(file)
		}
		reader.readAsDataURL(file);
	}

	removePreview() {
		this.fileObj = null;
		this.src = "../../assets/img/user-dummy.png"
		this.srcSet = false;
	}

	ngOnInit() {

	}
}
