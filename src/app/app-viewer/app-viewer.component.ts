import { Component, OnInit, DoCheck } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-app-viewer',
  templateUrl: './app-viewer.component.html',
  styleUrls: ['./app-viewer.component.css']
})
export class AppViewerComponent implements OnInit, DoCheck {

  selectedCharacter: any = null;
  homeworld: string = '';
  showJumbo = false;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.currentCharacter.subscribe(character =>{
      this.selectedCharacter = character;
    });

    this.swapiService.currentHomeworld.subscribe(homeworld => this.homeworld = homeworld);
  }

  ngDoCheck(){
   if (this.selectedCharacter){
          this.showJumbo = true;
      } else {
          this.showJumbo = false;
      }
  }

}
