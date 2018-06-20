import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from "@angular/http";
import { CookieService } from 'angular2-cookie/core';
import { User } from '../models/User';
  
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
  private _baseUrl = "http://stage-sg.mgkslt.com/";       //to be replaced with base Url
  
  private _urlSearchArea: string = "https://api.datamuse.com/words?ml=";       //to be replaced with base Url

  private _token: string;
  private _roleauth: string;
  private cookieService:CookieService;
  private versionString: string = "v1";
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

    setCookieWithExpiry(key: string, val: string, duration: number) {//duration in secs
      var currentDate = new Date()
      let opts = {
          expires: new Date(currentDate.getTime() + duration)
      };
      this._cookieService.put(key, val, opts);
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

  // HTTP REQUESTS WRAPPERS - GET, POST, PATCH

  //request wrapper
  getRequest(url, extraHeaders): Promise<any> {
    url = this.getUrl(url)
    var headers = this.getHeaders(url, extraHeaders)
    
    return this.http
      .get(
        url,
        new RequestOptions({
          headers: headers
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

  postRequest(url, object, extraHeaders): Promise<any> {
    url = this.getUrl(url)
    var headers = this.getHeaders(url, extraHeaders)
    if(extraHeaders) {
      for(var key in extraHeaders) {
        if(extraHeaders.hasOwnProperty(key)) {
          headers[key] = extraHeaders[key]
        }
      }
    }
    return this.http
      .post(
        url,
        object,
        new RequestOptions({
          headers: headers
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

  patchRequest(url, object, extraHeaders): Promise<any> {
    url = this.getUrl(url)
    var headers = this.getHeaders(url, extraHeaders)
    if(extraHeaders) {
      for(var key in extraHeaders) {
        if(extraHeaders.hasOwnProperty(key)) {
          headers[key] = extraHeaders[key]
        }
      }
    }
    return this.http
      .patch(
        url,
        object,
        new RequestOptions({
          headers: headers
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
  uploadFile(file, url, otherParams): Promise<any> {
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    if(otherParams) {
      for(var index in otherParams) {
        formData.append(otherParams[index]["key"], otherParams[index]["value"])
      }
    }
    let headers = new Headers();
    headers.append('authorization', this._token);
    headers.append('roleauth', this._roleauth);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.getUrl(url), formData, options)
    .toPromise()
  }

  //get header for all request
  getHeaders(url, extraHeaders): any {
    var _header = {
      "Content-Type": "application/json",
      "Content-Encoding": "gzip",
    };

    if(extraHeaders) {
      for(var key in extraHeaders) {
        if(extraHeaders.hasOwnProperty(key)) {
          _header[key] = extraHeaders[key]
        }
      }
    }

    if(url.indexOf("/secure/app/") > -1) {
      _header["authorization"] = this._token
      _header["roleauth"] = this._roleauth
    } else if(url.indexOf("/secure/") > -1) {
      _header["authorization"] = this._token
    }
    return new Headers(_header);
  }

  //get url
  getUrl(url): string {
    if(url == "board/list" || url == "state/list" || url == ""){
      return this._baseUrl + url;
    } else {
      return this._baseUrl + this.versionString + "/" + url;
    }
    
  }

  login(phone: string, password: string): Promise<any> {
    return this.postRequest("user/login", {
      phone: phone,
      password: password
    }, null)
  }

  signup(user: User): Promise<any> {
    return this.postRequest("user", {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password
    }, null)
  }

  forgotPassword1(phone: string): Promise<any> {
    return this.patchRequest("user/forgotpassword", {
      phone: phone
    }, null)
  }

  forgotPassword2(phone: string, otp: string): Promise<any> {
    return this.postRequest("user/forgotpassword", {
      phone: phone,
      otp: otp
    }, null)
  }

  verifyUser(userId: string, otp: string): Promise<any> {
    return this.postRequest("user/verify",{
      userId: userId,
      otp: otp
    }, null)
  }

  updatePasswordWithoutLogin(newPassword: string, repeatNewPassword: string, fpauthorization: string): Promise<any> {
    var fpauthHeader = {
      "fpauthorization": fpauthorization
    }
    return this.patchRequest("user/updatePassword",{
      newPassword: newPassword,
      repeatNewPassword: repeatNewPassword
    }, fpauthHeader)
  }

  resendOtp(phone: string): Promise<any> {
    return this.postRequest("user/resendOtp", {
      phone: phone
    }, null)
  }

  //get all user details
  getUserAsync(): Promise<any> {
    if(this.user == null) {
      return this.getRequest("secure/user", null)
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
      return this.getRequest("/board/list", null)
    } else {
      return new Promise(this.boardList);
    }
  }

  //get all states
  getStateList(): Promise<any> {
    if(this.stateList == null) {
      return this.getRequest("/state/list", null)
    } else {
      return new Promise(this.stateList);
    }
  }

  //get all user roles
  getUserRoleAsync(): Promise<any> {
    // if(this.roleList == null){
      return this.getRequest("secure/user/listRoles", null)
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
  saveSchoolDetail(objSchool): Promise<any> {
    var file = objSchool["file"];
    if(file) {
      var otherParams = [];
      otherParams.push({"key": "name", "value": objSchool["name"]})
      otherParams.push({"key": "city", "value": objSchool["city"]})
      otherParams.push({"key": "pincode", "value": objSchool["pincode"]})
      otherParams.push({"key": "address", "value": objSchool["address"]})
      otherParams.push({"key": "boardId", "value": objSchool["boardId"]})
      otherParams.push({"key": "stateId", "value": objSchool["stateId"]})
      return this.uploadFile(
        file,
        "secure/schooldp/",
        otherParams
      );
    } else {
      return this.postRequest("secure/school/", objSchool, null);
    }
    
  }

  // get school details for admin
  getSchoolForAdmin(schoolId): Promise<any> {
    return this.getRequest("secure/school/" + schoolId, null);
  }

  //save class detail
  saveClassDetail(objClass, schoolId): Promise<any> {
    return this.postRequest("secure/app/class",  objClass, null);
  }

  // FILE UPLOADS

  uploadStudentFile(uri, schoolId): Promise<any> {
    return this.uploadFile(
      uri,
      "secure/app/user/student",
      null
    );
  }

  teacherFileUpload(uri, schoolId): Promise<any> {
    return this.uploadFile(
      uri,
      "secure/app/user/teacher",
      null
    );
  }

  studentTeacherMappingFileUpload(uri, schoolId): Promise<any> {
    return this.uploadFile(
      uri,
      "secure/app/user/stmapping",
      null
    );
  }

  //role auth key
  getRoleAuthKey(type, id, sid): Promise<boolean> {
    return this.getRequest(
      ("secure/user/roleauth/" + type + "/" + id + "?sid=" + sid), null
    )
      .then(d => {
        this._roleauth = d.headers.get("roleauth");
        return true;
      })
      .catch(e => {
        return false;
      });
  }


  // to be changed, done by Dhritiman
  getSchoolSearchArea(area): Promise<any> {
    return this.getRequest("addExtrasArea" + area, null);
  }

  // to be changed, done by Dhritiman
  getSchoolSearchSchool(school): Promise<any> {
    return this.getRequest("addExtrasSchool" + school, null);
  }

  // to be changed, done by Dhritiman
  getSchoolSearchLatLng(latitude, longitude): Promise<any> {
    return this.getRequest("addExtrasLatLng" + "latitude="+latitude+"&longitude="+longitude, null);
  }

  //to be changed, Added by Dhritiman Haldar
  search_word(term){
    return this.http.get(this._urlSearchArea + term).map(res => {
        return res.json().map(item => {
            return item.word
        })
    })
}

}