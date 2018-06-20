import { Component, OnInit} from '@angular/core';
import { AppNotificationService } from '../services/app-notification.service';
import { AppNetworkService } from '../services/app-network.service';
import { State } from '../models/State';
import { SchoolCard } from '../models/SchoolCard';
import { SchoolService } from '../services/school.service';
import { FormControl } from '@angular/forms';
import { LatLng } from '@agm/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import {
  state
} from '@angular/animations';
declare var $: any;
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  public  searchTerm : FormControl = new FormControl();

  public searchResult = [];
  
  private appNetworkService: AppNetworkService;
  private appNotificationService: AppNotificationService;
  public stateList: State[];
  public stateName: string[];
  public message = "message";
  public currenView: string = 'startapp'
  private schoolService: SchoolService;
  public latitude: LatLng;
  public longitude: LatLng;
  public count:number = 0;

  constructor(private apns: AppNetworkService, private ans: AppNotificationService) {
    this.appNetworkService = apns;
    this.appNotificationService = ans;

    this.searchTerm.valueChanges.debounceTime(300).subscribe(data => {
            this.apns.search_word(data).subscribe(response =>{
                this.searchResult = response
            })
        })

  }

getLocationAndSearch() {
  
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

myFocus(){

  this.apns.getStateList().then(d => {
    let data = d.json();
    console.log(data)
    this.stateList = data.list;

  }).catch(e => {
  });

  this.notifyIt(this.stateList[3].name +" and "+this.stateList[15].name+ " for verification"); //to be removed

}

notifyIt(display){
  this.appNotificationService.notify(display, "info");
}

  ngOnInit(): void  {
  }

}






