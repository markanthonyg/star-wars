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

  currentCharacter:any;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  activate(e, c) {
    if (this.lastClicked && this.lastClicked != e.target) {
      $(this.lastClicked).removeClass('active');
      $(e.target).addClass('active');
      this.lastClicked = e.target;
    }
    else {
      $(e.target).addClass('active');
      this.lastClicked = e.target;
    }

    // update app-viewer component somehow?!?!?!?
    this.currentCharacter = c;
    this.swapiService.setCurrentCharacter(this.currentCharacter);
  }

}
