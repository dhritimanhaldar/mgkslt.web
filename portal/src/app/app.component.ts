import { Component} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private cookieService:CookieService;
    private baseUrl: string = "//www.mgkslt.com"

    getCookie(key: string) {
      return this._cookieService.get(key);
    }

    verifyCookies(authCookie: string, roleauthCookie: string) {
      if(!authCookie) {
        window.location.href = this.baseUrl + "/login";
        return;
      } else if(!roleauthCookie) {
        window.location.href = this.baseUrl + "/role";
        return;
      }
    }

	constructor(private _cookieService:CookieService) {
		this.cookieService = _cookieService;
      	this.verifyCookies(this.getCookie("authorization"), this.getCookie("roleauth"));
	}

}
