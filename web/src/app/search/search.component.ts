import { Component, ViewChild, OnInit} from '@angular/core';
import { AppNetworkService } from '../services/app-network.service';
import { State } from '../models/State';
import {
  state
} from '@angular/animations';
import { MatInput } from '@angular/material';
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  
  private button: HTMLElement;
  private appNetworkService: AppNetworkService;
  public stateList: State[];
  public stateName: string[];
  private message = "message";
  private isFirst = true;

  constructor(private apns: AppNetworkService) {
    this.appNetworkService = apns;
  }

  setSaving(element){
    element.textContent = this.stateList[2].name;
  }

  myFunction(event) {
    
    var button = event.target;
    button.textContent = "Wait.....";
    button.disabled = true;

    var div = document.getElementById("myDropdown");

    if(this.isFirst){
      var linenext = document.createElement("div");
    this.appNetworkService.getStateList()
    .then(d => {
      let data = d.json();
      console.log(data)
      this.stateList = data.list;

      for (var j = 0; j < this.stateList.length; j++) {
        var a = document.createElement("a");
        a.href = "#"+this.stateList[j].name;
        a.textContent = this.stateList[j].name+"<br />";
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

}

filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

  ngOnInit() {

  }

}






