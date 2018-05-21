export class Utils {

	public static markBusy(button) {
		button.disabled = true
		button.innerHTML = "<img src='/assets/img/loading.gif' style='width:20px;height:20px'>";
	}

	public static markActive(button, originalButtonContent) {
		button.disabled = false
		button.innerHTML = originalButtonContent;
	}

  	public static checkFileExtention(fileName, accepts): boolean {
    	var _reg = new RegExp("\\." + accepts.join("$|\\.") + "$", "i");
    	return _reg.test(fileName);
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
}