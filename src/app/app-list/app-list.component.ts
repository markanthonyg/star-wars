import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
//import * as $ from 'jquery';
declare const $:any;

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  apps: string[] = ['facebook', 'snapchat', 'instagram', 'tinder', 'bumble'];
  characters: any[];
  lastClicked: any;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getCharacters().subscribe(characters => {
      this.characters = characters;
    })
  }

  activate(c) {

    if (this.lastClicked && this.lastClicked != c.target) {
      $(this.lastClicked).removeClass('active');
      $(c.target).addClass('active');
      this.lastClicked = c.target;
    }
    else {
      $(c.target).addClass('active');
      this.lastClicked = c.target;
    }
    // for (var v in c.target)
    //   console.log(v);
  }

}
