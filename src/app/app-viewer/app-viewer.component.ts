import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-app-viewer',
  templateUrl: './app-viewer.component.html',
  styleUrls: ['./app-viewer.component.css']
})
export class AppViewerComponent implements OnInit {

  selectedCharacter: any = null;
  homeworld: string = null;
  opacity = 1.0;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.currentCharacter.subscribe(character => {
      if (character) this.opacity = 0.5;
      this.selectedCharacter = character;
    });

    this.swapiService.currentHomeworld.subscribe(homeworld => {
       this.homeworld = homeworld;
     });
  }

}
