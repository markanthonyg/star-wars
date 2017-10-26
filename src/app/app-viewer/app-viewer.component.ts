import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-app-viewer',
  templateUrl: './app-viewer.component.html',
  styleUrls: ['./app-viewer.component.css']
})
export class AppViewerComponent implements OnInit {

  selectedCharacter: any;
  homeworld: string;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.currentCharacter.subscribe(character => this.selectedCharacter = character);
    this.swapiService.currentHomeworld.subscribe(homeworld => this.homeworld = homeworld);
    this.swapiService.getHomeworld(this.selectedCharacter.homeworld).subscribe(world => this.homeworld = world);
  }

}
