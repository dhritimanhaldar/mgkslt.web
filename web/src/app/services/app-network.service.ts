import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from "@angular/http";
import { CookieService } from 'angular2-cookie/core';
  
//school object
export class school {
  constructor(
    public name: string,
    public address: string,
    public city: string,
    public pincode: string,
    public boardId?: number,
    public stateId?: number
  ) {}
}

@Injectable()
export class AppNetworkService {
  private appConfig;
  private _baseUrl = "https://sg.mgkslt.com/";

  private _token: string;
  private _roleauth: string;
  private cookieService:CookieService;
  private baseWebUrl: string = "//www.mgkslt.com"
  private roles = ["ADMIN", "TEACHER", "PARENT"];
  private roleList = null;
  private user = null;
  private boardList = null;
  private stateList = null;

  constructor(
    public http: Http,
    private _cookieService:CookieService
  ) {
      this.cookieService = _cookieService;
      if(this.getCookie("authorization") && this.getCookie("authorization").startsWith("Bearer")) {
        this._token = this.getCookie("authorization")
      }
      if(this.getCookie("roleauth") && this.getCookie("roleauth").startsWith("Bearer")) {
        this._token = this.getCookie("roleauth")
      }
   }

   //COOKIE RELATED FUNCTIONS

    getCookie(key: string) {
      return this._cookieService.get(key);
    }

    setCookie(key: string, val: string) {
      this._cookieService.put(key, val);
    }

    setPermanentCookie(key: string, val: string) {
      let opts = {
          expires: new Date('3000-12-31')
      };
      this._cookieService.put(key, val, opts);
    }

    deleteCookie(key: string) {
      this._cookieService.remove(key);
    }

    deleteAllCookies() {
      this._cookieService.removeAll();
    }

    verifyIfLoggedIn(): Boolean {
      if(!this.getCookie("authorization")) {
        this.deleteAllCookies()
        return false
      } 
      return true
    }

    verifyIfAlreadyInPortal(): Boolean {
      if(!this.getCookie("roleauth")) {
        return false;
      }
      return true;
    }

    // verifyCookies(authCookie: string, roleauthCookie: string) {
    //   if(!authCookie) {
    //     this.redirectToLogin()
    //     return;
    //   }
    //   if(roleauthCookie){
    //     this.redirectToPortal()
    //     return;
    //   }
    // }

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
          this.setPermanentCookie("roleauth", this._roleauth)
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
        if (res.headers.get("authorization")) {
          this._token = res.headers.get("authorization");
          this.setPermanentCookie("authorization", this._token)
        }
        if (res.headers.get("roleauth")) {
          this._roleauth = res.headers.get("roleauth");
          this.setPermanentCookie("roleauth", this._roleauth)
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
          this.setPermanentCookie("roleauth", this._roleauth)
        }
        return res;
      });
  }

  //upload file
  uploadFile(file, url): Promise<any> {
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = new Headers();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    headers.append('authorization', this._token);
    headers.append('roleauth', this._roleauth);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.getUrl(url), formData, options)
    .toPromise()
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

  login(phone: string, password: string): Promise<any> {
    return this.postRequest("user/login", {
      phone: phone,
      password: password
    })
  }

  //get all user details
  getUserAsync(): Promise<any> {
    if(this.user == null) {
      return this.getRequest("secure/user")
      .then(d => {
        let data = d.json();
        this.user = data;
        return data;
      }).catch(e => {
        this.deleteCookie("authorization");
        this.deleteCookie("roleauth");
        // this.verifyCookies(undefined, undefined);
        return false;
      });
    }
  }

  getUser(): Object {
    return this.user;
  }

  //logout
  logout() {
    this.deleteCookie("authorization")
    this.deleteCookie("roleauth")
    window.location.reload();
  }

  //get all boards
  getBoardList(): Promise<any> {
    if(this.boardList == null) {
      return this.getRequest("/board/list")
    } else {
      return new Promise(this.boardList);
    }
  }

  //get all states
  getStateList(): Promise<any> {
    if(this.stateList == null) {
      return this.getRequest("/state/list")
    } else {
      return new Promise(this.stateList);
    }
  }

  //get all user roles
  getUserRoleAsync(): Promise<any> {
    // if(this.roleList == null){
      return this.getRequest("secure/user/listRoles")
    .then(d => {
        let data = d.json();
        this.roleList = data;
        return data;
      })
      .catch(e => {
        this.deleteCookie("authorization");
        this.deleteCookie("roleauth");
        // this.verifyCookies(undefined, undefined);
        return false;
      });
    // } else {
    //   return new Promise(this.roleList);
    // }
  }

  // getUserRole(): Object {
  //   return this.roleList;
  // }

  //save school
  saveSchoolDetail(objSchool: school): Promise<any> {
    return this.postRequest("secure/school/", objSchool);
  }

  // get school details for admin
  getSchoolForAdmin(schoolId): Promise<any> {
    return this.getRequest("/secure/school/" + schoolId);
  }

  //save class detail
  saveClassDetail(objClass, schoolId): Promise<any> {
    return this.postRequest("secure/app/school/"+schoolId+"/class",  objClass);
  }

  // FILE UPLOADS

  uploadStudentFile(uri, schoolId): Promise<any> {
    return this.uploadFile(
      uri,
      "secure/app/school/" + schoolId + "/user/student"
    );
  }

  teacherFileUpload(uri, schoolId): Promise<any> {
    return this.uploadFile(
      uri,
      "secure/app/school/" + schoolId + "/user/teacher"
    );
  }

  studentTeacherMappingFileUpload(uri, schoolId): Promise<any> {
    return this.uploadFile(
      uri,
      "secure/app/school/" + schoolId + "/user/stmapping"
    );
  }

  //role auth key
  getRoleAuthKey(type, id, sid): Promise<boolean> {
    return this.getRequest(
      "secure/user/roleauth/" + type + "/" + id + "?sid=" + sid
    )
      .then(d => {
        this._roleauth = d.headers.get("roleauth");
        return true;
      })
      .catch(e => {
        return false;
      });
  }

}