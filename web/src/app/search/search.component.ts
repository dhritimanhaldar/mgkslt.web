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

  private defaultOptions= [
    { value: 'dummy1' },
    { value: 'dummy2' },
    { value: 'dummy3' }
];

  constructor(private apns: AppNetworkService) {
    this.appNetworkService = apns;
  }

  checkForNewLine(keycode){
    if (keycode === 13 || keycode == 8 || keycode == 46){
        this.defaultOptions = [];
        let tmp = this.stateName;
        tmp.forEach((data) => {
                this.defaultOptions.push({value: data});
            });
    }
  }

  setSaving(element){
    element.textContent = this.stateList[2].name;
  }

  goodClick(event){
    
    var button = event.target;
    button.textContent = "Wait.....";
    button.disabled = true;
    this.appNetworkService.getStateList()
    .then(d => {
      let data = d.json();
      console.log(data)
      this.stateList = data.list;

      for(var i=0; i<this.stateList.length; i++){
        this.stateName[i] = this.stateList[i].name;
      }

      button.textContent = "Ready";
      button.disabled = false;
    }).catch(e => {
    });

  }

  ngOnInit() {

  }

}






