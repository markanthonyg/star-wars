import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
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
  opacity = 0.75;

  currentCharacter:any;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  activate(e, c) {
    this.opacity = 0.5;
    // update app-viewer component
    this.currentCharacter = c;
    this.swapiService.setCurrentCharacter(this.currentCharacter);
  }

}
