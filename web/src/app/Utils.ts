export class Utils {

  private static genders = [
  {"value": "M", "text": "Male"},
  {"value": "F", "text": "Female"},
  {"value": "O", "text": "Other"},
  ]

  private static supportedFileInfo = {
    "csv": { "normalizedType" : "file", "type": "csv"},
    "docx": { "normalizedType" : "file", "type": "docx"},
    "doc": { "normalizedType" : "file", "type": "doc"},
    "jpg": { "normalizedType" : "image", "type": "image/jpg"},
    "jpeg": { "normalizedType" : "image", "type": "image/jpeg"},
    "png": { "normalizedType" : "image", "type": "image/png"}
  }

  public static markBusy(button) {
    button.disabled = true
    button.innerHTML = "<img src='/assets/img/loading.gif' style='width:20px;height:20px'>";
  }

  public static markActive(button, originalButtonContent) {
    button.disabled = false
    button.innerHTML = originalButtonContent;
  }

  public static checkFileExtention(filename, accepts): boolean {
    var extension = filename.split('.').pop();
    return extension.toLowerCase() == accepts
  }

  public static getDisplayUpdatedAt(timestamp): string {
    var currentTimestamp = new Date().getTime()
    var diff = (currentTimestamp - timestamp)/1000
    if(diff < 1){
      return "just now"
    }else if(diff < 15) {
      return Math.floor(diff) + " seconds ago"
    } else if (diff < 60) {
      return " few seconds ago"
    } else if (diff < 90) {
      return " about a minute ago"
    } else if (diff < 3600) {
      return Math.floor(diff/60) + " minutes ago"
    } else if(diff < 3600 * 24) {
      return Math.floor(diff/3600) + " hours ago"
    } else if(diff < 3600 * 48) {
      return "yesterday"
    } else {
      var localDateTime = (new Date(timestamp)).toLocaleDateString()
      return "on " + localDateTime
    }
  }

  public static validatePhone(phone: string): Boolean {
    if(!phone || phone.trim().match(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/) == null) {
      return false;
    }
    return true;
  }

  public static validatePassword(password: string): Boolean {
    if(!password || password.length < 6) {
      return false;
    }
    return true;
  }

  public static validateEmail(email: string): Boolean {
    if(!email || email.trim().match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) == null) {
      return false
    }
    return true
  }

  public static getGenders() {
    return this.genders
  }

  public static getSupportedFileInfo() {
    return this.supportedFileInfo
  }

  public static isValidImageFile(fileType) {
    var ftype = fileType.split("/")[1]
    if(ftype) {
      if(!this.supportedFileInfo[ftype]) {
        return false
      }
      return this.supportedFileInfo[ftype]["normalizedType"] == "image"
    }
    return false;
  }
}