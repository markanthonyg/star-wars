import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare const $:any;

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  apps: string[] = ['facebook', 'snapchat', 'instagram', 'tinder', 'bumble'];
  characters: any[];
  charactersPrev: any[];
  charactersNext: any[];
  lastClicked: any;
  opacity = 0.75;
  showPaginate = false;
  url = 'https://swapi.co/api/people/';

  uri = new BehaviorSubject<any>(null);
  nextUrl = this.uri.asObservable();

  currentCharacter:any;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.nextUrl.subscribe(next => {
      if (next) {
        this.swapiService.getCharacters(next).subscribe(data => {
          this.characters = this.characters.concat(data['results']);
          this.uri.next(data['next']);
        });
      }
    });
    this.swapiService.getCharacters(this.url).subscribe(characters => {
      this.characters = characters['results'];
      this.uri.next(characters['next']);
      this.showPaginate = true;
    });
  }

  activate(e, c) {
    this.opacity = 0.5;
    // update app-viewer component
    this.currentCharacter = c;
    this.swapiService.setCurrentCharacter(this.currentCharacter);
  }

}
