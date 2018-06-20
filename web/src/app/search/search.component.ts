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

/*import {
  state
} from '@angular/animations';
declare var $: any;
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
*/
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  public searchArea : FormControl = new FormControl();     // take a look at these
  public searchSchool : FormControl = new FormControl();
  searchTextArea: string  
  searchTextSchool: string                                 // till these, since my *ng functions are not working

  public searchResult = [];
  public filteredValues = [];
  
  private appNetworkService: AppNetworkService;
  private appNotificationService: AppNotificationService;
  public stateList: State[];
  public stateName: string[];
  public searchResultSchool: SchoolCard[];

  public message = "message";
  public currenView: string = 'startapp'
  private schoolService: SchoolService;
  public latitude: LatLng;
  public longitude: LatLng;
  public count:number = 0;      //to be deleted, for testing perposes only

  constructor(private apns: AppNetworkService, private ans: AppNotificationService) {
    this.appNetworkService = apns;
    this.appNotificationService = ans;

    this.searchArea.valueChanges.subscribe(newValue=>{
           this.filteredValues = this.filterValues(newValue);
        })

    this.searchSchool.valueChanges.debounceTime(300).subscribe(data => {
            this.apns.search_word(data).subscribe(response =>{
                this.searchResult = response
            })
        })

  }

  filterValues(search: string) {
    return this.stateName.filter(value=>
    value.toLowerCase().indexOf(search.toLowerCase()) === 0);
}

searchByArea(){

  this.appNetworkService.getSchoolSearchArea(this.searchTextArea).then(d => {
    let data = d.json();
    console.log(data)
    this.searchResultSchool = data.list;

  }).catch(e => {
    this.notifyIt(this.searchTextArea);
  });
  
}

searchBySchool(){

  this.appNetworkService.getSchoolSearchSchool(this.searchTextSchool).then(d => {
    let data = d.json();
    console.log(data)
    this.searchResultSchool = data.list;

  }).catch(e => {

    this.notifyIt(this.searchTextSchool);
  });
  
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

    this.appNetworkService.getSchoolSearchLatLng(this.latitude, this.longitude).then(d => {
      let data = d.json();
      console.log(data)
      this.searchResultSchool = data.list;
  
    }).catch(e => {
      this.notifyIt("Latitude: "+ this.latitude+ ", Longitude: "+ this.longitude);
    });

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

  this.appNetworkService.getStateList().then(d => {
    let data = d.json();
    console.log(data)
    this.stateList = data.list;

    //this.bindData()             //*** this function is not working properly but will be needed for dropdown, although it is just a simple function, explanation find at ###

  }).catch(e => {
  });

  this.notifyIt(this.stateList[this.count].name+ " for verification");    //### explanation: this is working but
  //this.notifyIt(this.stateName[this.count]+ " for verification");         //this is not
  this.count = this.count+1;

}

notifyIt(display){
  this.appNotificationService.notify(display, "info");
}

bindData(){
  for(var i = 0; i<this.stateList.length; i++){
    this.stateName[i] = this.stateList[i].name;
  }
}

  ngOnInit(): void  {
  }

}






