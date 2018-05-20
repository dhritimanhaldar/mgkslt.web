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
}