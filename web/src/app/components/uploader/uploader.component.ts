import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppNotificationService } from '../../services/app-notification.service';

@Component({
	selector: 'app-uploader',
	templateUrl: './uploader.component.html',
	styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

	@Input() type:string;
	@Output('onUpdate') onUpdate: EventEmitter<File> = new EventEmitter<File>();

	private isActive: Boolean = false;
	private fileObj = null

	private appNotificationService: AppNotificationService;

	private supportedFileInfo = {
		"csv": { "normalizedType" : "file", "type": "csv"},
		"jpg": { "normalizedType" : "image", "type": "image/jpg"},
		"jpeg": { "normalizedType" : "image", "type": "image/jpeg"},
		"png": { "normalizedType" : "image", "type": "image/png"}
	}

	constructor(private ans: AppNotificationService) { 
  		this.appNotificationService = ans;
	}

	getFileType() {
		return this.supportedFileInfo[this.type]["normalizedType"] ? this.supportedFileInfo[this.type]["normalizedType"] : "file";
	}

	ngOnInit() {
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
		var fileType = this.getFileType()
		switch(fileType) {
			case "image": this.showImagePreview(event.dataTransfer.files[0])
			break;
			case "file": this.showFileInformation(event.dataTransfer.files[0])
			break;
		}
	}

	changeListener(event) {
		var fileType = this.getFileType()
		switch(fileType) {
			case "image": this.showImagePreview(event.target.files[0])
			break;
			case "file": this.showFileInformation(event.target.files[0])
			break;
		}
	}

	isValidImageFile(fileType) {
		var ftype = fileType.split("/")[1]
		if(ftype) {
			return this.supportedFileInfo[ftype]["normalizedType"] == "image"
		}
		return false;
	}

	showImagePreview(file) {
		if(!this.isValidImageFile(file.type)) {
			this.appNotificationService.notify("Not a valid image file", "danger")
			return
		}
		var reader:FileReader = new FileReader();
		var self = this;
		reader.onload = function (event) {
			self.fileObj = {
				filename: file.name,
				preview: reader.result,
				uploadedFile: file
			}
			self.onUpdate.emit(file)
		}
		reader.readAsDataURL(file);
	}

	showFileInformation(file) {
		if(this.isValidImageFile(file.type)) {
			this.appNotificationService.notify("Image file not expected", "danger")
			return
		}
		this.fileObj = {
			filename: file.name,
			uploadedFile: file
		}
		this.onUpdate.emit(file)
	}

	clearPreview() {
		this.isActive = false;
		this.fileObj = null;
	}

	getDropzoneState() {
		if(this.fileObj) {
			return "preview"
		}
		return this.isActive ? "highlighted" : "unhighlighted"
	}

}
