import { Component, ViewChild, OnInit} from '@angular/core';
import { AppNotificationService } from '../services/app-notification.service';
import { AppNetworkService } from '../services/app-network.service';
import { State } from '../models/State';
import { Utils } from '../Utils'
import { Observable, Subject } from 'rxjs';

import {
  state
} from '@angular/animations';
import { MatInput } from '@angular/material';
declare var $: any;
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { SchoolCard } from '../models/SchoolCard';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  
  private button: HTMLElement;
  private appNetworkService: AppNetworkService;
  private appNotificationService: AppNotificationService;
  public stateList: State[];
  public stateName: string[];
  public message = "message";
  public currenView: string = 'startapp'
  public isFirst = true;
  public SchoolCards$: Observable<SchoolCard[]>;
  private searchTerms = new Subject<string>();

  constructor(private apns: AppNetworkService, private ans: AppNotificationService, private SchoolService: SchoolService) {
    this.appNetworkService = apns;
    this.appNotificationService = ans;
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  myFunction(event) {/*
    this.SchoolCards$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      event.debounceTime(200),
 
      // ignore new term if same as previous term
      event.distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      event.switchMap((term: string) => this.SchoolService.searchSchoolCards(term)),
    );*/
    
    var button = event.target;
    button.textContent = "Wait.....";
    button.disabled = true;

    var div = document.getElementById("myDropdown");

    if(this.isFirst){
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
        this.isFirst = false;
    }  
    }).catch(e => {
    });
  }

  div.classList.toggle("show");

  button.disabled = false;
  button.textContent = "Ready";
  
  this.currenView = 'getready'
}

filterFunction() {
    var input, filter, ul, li, a, i, tempbreak;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    
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

notifyIt(event){
  this.appNotificationService.notify(this.currenView, "warning");
}

myFoucus(){

}
myBlur(){
  
}

  ngOnInit(): void  {
  }

}






