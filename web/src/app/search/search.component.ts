import { Component, OnInit, ElementRef} from '@angular/core';
import { AppNotificationService } from '../services/app-notification.service';
import { AppNetworkService } from '../services/app-network.service';
import { State } from '../models/State';
import { SchoolCard } from '../models/SchoolCard';
import { SchoolService } from '../services/school.service';

import {
  state
} from '@angular/animations';
declare var $: any;
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { LatLng } from '@agm/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  
  
  private appNetworkService: AppNetworkService;
  private appNotificationService: AppNotificationService;
  public stateList: State[];
  public stateName: string[];
  public message = "message";
  public currenView: string = 'startapp'
  public isFirstArea = true;
  public isFirstSchool = true;
  private searchTerms = new Subject<string>();
  private schoolService: SchoolService;
  public latitude: LatLng;
  public longitude: LatLng;
  public count:number = 0;

  constructor(private apns: AppNetworkService, private ans: AppNotificationService, private el: ElementRef) {
    this.appNetworkService = apns;
    this.appNotificationService = ans;
  }
  
  myFunctionArea(event) {
    
    var button = event.target;
    button.textContent = "Wait.....";
    button.disabled = true;

    var div = document.getElementById("myDropdownArea");

    if(this.isFirstArea){
    this.appNetworkService.getStateList()
    .then(d => {
      let data = d.json();
      console.log(data)
      this.stateList = data.list;

      for (var j = 0; j < this.stateList.length; j++) {
        var a = document.createElement("a");
        a.href = "#"+this.stateList[j].name;
        a.textContent = this.stateList[j].name;
        div.appendChild(a);
        div.appendChild(document.createElement("br"));
        this.isFirstArea = false;
    }  
    }).catch(e => {
    });
  }

  div.classList.toggle("show");

  button.disabled = false;
  button.textContent = "Ready";
  
  this.currenView = 'getready'
}
  
myFunctionSchool(event) {
  
  var button = event.target;
  button.textContent = "Wait.....";
  button.disabled = true;

  var div = document.getElementById("myDropdownSchool");

  if(this.isFirstSchool){
  this.appNetworkService.getStateList()
  .then(d => {
    let data = d.json();
    console.log(data)
    this.stateList = data.list;

    for (var j = 0; j < this.stateList.length; j++) {
      var a = document.createElement("a");
      a.href = "#"+this.stateList[j].name;
      a.textContent = this.stateList[j].name;
      div.appendChild(a);
      div.appendChild(document.createElement("br"));
      this.isFirstSchool = false;
  }  
  }).catch(e => {
  });
}

div.classList.toggle("show");

button.disabled = false;
button.textContent = "Ready";

this.currenView = 'getready'
}

filterFunctionArea() {
  this.count = this.count+1;
  var input, filter, a, i, tempbreak;
  input = document.getElementById("myInputArea");
  filter = input.value.toUpperCase();
  var div = document.getElementById("myDropdownArea");
  
  a = div.getElementsByTagName("a");
  tempbreak = div.getElementsByTagName("br");
  for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        tempbreak[i].style.display = "";
      } else {
        a[i].style.display = "none";
        tempbreak[i].style.display = "none";
      }
  }
}

filterFunctionSchool() {
  
  var input, filter, a, i, tempbreak;
  input = document.getElementById("myInputSchool");
  filter = input.value.toUpperCase();
  var div = document.getElementById("myDropdownSchool");
  
  a = div.getElementsByTagName("a");
  tempbreak = div.getElementsByTagName("br");
  for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        tempbreak[i].style.display = "";
      } else {
        a[i].style.display = "none";
        tempbreak[i].style.display = "none";
      }
  }
}

getLocationAndSearch() {
  this.notifyIt(this.count);
  var nav = navigator.geolocation;
    if (nav) {
        nav.getCurrentPosition(this.getSearchPosition.bind(this), this.showError);
    } else { 
      this.notifyIt("You did not allow your location to be shared");
    }
}

getSearchPosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.notifyIt("Latitude: "+ this.latitude+ ", Longitude: "+ this.longitude);
}

showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            this.notifyIt("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            this.notifyIt("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            this.notifyIt("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            this.notifyIt("An unknown error occurred.")
            break;
    }
  }

notifyIt(display){
  this.appNotificationService.notify(display, "info");
}

myFocus(){
    
  var button = event.target;

  var div = document.getElementById("myDropdownArea");

  if(this.isFirstArea){
  this.appNetworkService.getStateList()
  .then(d => {
    let data = d.json();
    console.log(data)
    this.stateList = data.list;

    for (var j = 0; j < this.stateList.length; j++) {
      var a = document.createElement("a");
      a.href = "#"+this.stateList[j].name;
      a.textContent = this.stateList[j].name;
      div.appendChild(a);
      div.appendChild(document.createElement("br"));
      this.isFirstArea = false;
  }  
  }).catch(e => {
  });
}

div.classList.toggle("show");

this.currenView = 'getready'

}
myBlur(){
    
  var button = event.target;

  var div = document.getElementById("myDropdownArea");

  if(this.isFirstArea){
  this.appNetworkService.getStateList()
  .then(d => {
    let data = d.json();
    console.log(data)
    this.stateList = data.list;

    for (var j = 0; j < this.stateList.length; j++) {
      var a = document.createElement("a");
      a.href = "#"+this.stateList[j].name;
      a.textContent = this.stateList[j].name;
      div.appendChild(a);
      div.appendChild(document.createElement("br"));
      this.isFirstArea = false;
  }  
  }).catch(e => {
  });
}

div.classList.toggle("show");

this.currenView = 'getready'
  
}

  ngOnInit(): void  {
  }

}






