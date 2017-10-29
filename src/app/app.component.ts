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
  // worlds = {
  //   "Tatooine": "../assets/images/tatooine.jpg",
  //   "Naboo": "../assets/images/naboo.jpg",
  //   "Alderaan": "../assets/images/alderaan.png",
  //   "Stewjon": "../assets/images/stewjon.jpg",
  //   "Bespin": "../assets/images/bespin.png"
  // };

  backLoads = true;

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
    let path = '../assets/images/' + world.toLowerCase() + '.png';
    console.log(path);
    if (this.backLoads) {
      $('#back').attr('src', path);
      $('#back').on('load', function() {
        $('#front').toggleClass('transparent');
        $('#back').toggleClass('transparent');
        $('#back').off('load');
      });
      this.backLoads = false;
    } else {
      $('#front').attr('src', path);
      $('#front').on('load', function() {
        $('#back').toggleClass('transparent');
        $('#front').toggleClass('transparent');
        $('#front').off('load');
      });
      this.backLoads = true;
    }
  }
}
