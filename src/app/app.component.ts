import { Component } from '@angular/core';
import { SwapiService } from './swapi.service';
declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentWorld: string = "";
  worlds = {
    Tatooine: "../assets/images/tatooine.jpg",
    Naboo: "../assets/images/naboo.jpg",
    Alderaan: "../assets/images/alderaan.png",
    Stewjon: "../assets/images/stewjon.jpg"
  };

  constructor(private data: SwapiService) {}

  ngOnInit() {
    this.data.currentHomeworld.subscribe(world => {
      if (world && world != this.currentWorld) {
        this.currentWorld = world;
        this.updateWorldBg(this.currentWorld);
      }
     });
     $('#back').toggleClass('transparent');
  }

  updateWorldBg(world) {
    $('#back').attr('src', this.worlds[world]);
    $('#back').on('load', function() {
      $('#front').toggleClass('transparent');
      $('#back').toggleClass('transparent');
      $('#back').attr('id', 'front');
      $('#front').attr('id', 'back');

    });
  }
}
