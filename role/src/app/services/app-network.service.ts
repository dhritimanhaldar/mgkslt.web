import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from "@angular/http";
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AppNetworkService {
  private appConfig;
  private _baseUrl = "https://sg.mgkslt.com/";

  private _token: string;
  private _roleauth: string;
  private cookieService:CookieService;
  private baseWebUrl: string = "//www.mgkslt.com"

  constructor(
    public http: Http,
    private _cookieService:CookieService
  ) {
      this.cookieService = _cookieService;
      this.verifyCookies(this.getCookie("authorization"), this.getCookie("roleauth"));
      this._token = this.getCookie("authorization")
   }

   //COOKIE RELATED FUNCTIONS

    getCookie(key: string) {
      return this._cookieService.get(key);
    }

    setCookie(key: string, val: string) {
      this._cookieService.put(key, val);
    }

    deleteCookie(key: string) {
      this._cookieService.remove(key);
    }

    verifyCookies(authCookie: string, roleauthCookie: string) {
      if(authCookie && roleauthCookie) {
        window.location.href = this.baseWebUrl + "/portal";
        return;
      }
      if(!authCookie) {
        window.location.href = this.baseWebUrl + "/login";
        return;
      }
    }

  // HTTP REQUESTS WRAPPERS - GET, POST, PATCH

  //request wrapper
  getRequest(url): Promise<any> {
    return this.http
      .get(
        this.getUrl(url),
        new RequestOptions({
          headers: this.getHeaderDetail(undefined, undefined)
        })
      )
      .toPromise()
      .then(res => {
        if (res.headers.get("roleauth")) {
          this._roleauth = res.headers.get("roleauth");
          this.setCookie("roleauth", this._roleauth);
        }
        return res;
      });
  }

  postRequest(url, object): Promise<any> {
    return this.http
      .post(
        this.getUrl(url),
        object,
        new RequestOptions({
          headers: this.getHeaderDetail(undefined, undefined)
        })
      )
      .toPromise()
      .then(res => {
        if (res.headers.get("roleauth")) {
          this._roleauth = res.headers.get("roleauth");
          this.setCookie("roleauth", this._roleauth);
        }
        return res;
      });
  }

  patchRequest(url, object): Promise<any> {
    return this.http
      .patch(
        this.getUrl(url),
        object,
        new RequestOptions({
          headers: this.getHeaderDetail(undefined, undefined)
        })
      )
      .toPromise()
      .then(res => {
        if (res.headers.get("roleauth")) {
          this._roleauth = res.headers.get("roleauth");
          this.setCookie("roleauth", this._roleauth);
        }
        return res;
      });
  }

  //get header for all request
  getHeaderDetail(_contentType, fpauth): any {
    let _header = {
      "Content-Type": _contentType || "application/json",
      fpauthorization: fpauth,
      authorization: this._token,
      roleauth: this._roleauth
    };
    return new Headers(_header);
  }

  //get url
  getUrl(url): string {
    return this._baseUrl + url;
  }

  //get all user data
  getUserRole(): Promise<any> {
    return this.getRequest("secure/user/listRoles")
    .then(d => {
        return d._body;
      })
      .catch(e => {
        console.log(" --> " + e);
        return false;
      });;
  }

}