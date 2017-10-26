import { Component } from '@angular/core';
import { SwapiService } from './swapi.service';
declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private data: SwapiService) {}

  ngOnInit() {
    this.data.currentHomeworld.subscribe(world => this.updateWorldBg(world));
  }

  updateWorldBg(world) {
    if (world == 'Tatooine') {
      //$("#bg").css("background-image", "url(https://cdna.artstation.com/p/assets/images/images/002/448/368/large/benoit-duroi-tatooine-reboot-0029-cam-004.jpg?1461853926)");
      $("#bg").css("background-image", "url(../assets/images/tatooine.jpg)");
    } else if (world == 'Naboo') {
      //$("#bg").css("background-image", "url(http://i.imgur.com/EqlBZgR.jpg)");
      $("#bg").css("background-image", "url(../assets/images/naboo.jpg)");
    } else if (world == 'Alderaan') {
      //$('#bg').css("background-image", "url(https://vignette1.wikia.nocookie.net/starwars/images/a/a0/Alderaan_mountains.png/revision/latest?cb=20130202022435)");
      $('#bg').css("background-image", "url(../assets/images/alderaan.png)");
    } else if (world == 'Stewjon') {
      //$('#bg').css("background-image", "url(http://pre12.deviantart.net/85fb/th/pre/f/2014/333/1/4/neo_hong_kong_sunset_by_jjcanvas-d882swc.jpg)");
      $('#bg').css("background-image", "url(../assets/images/stewjon.jpg)");
    }
  }
}
