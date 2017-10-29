import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class SwapiService {

  private selectedCharacter = new BehaviorSubject<any>(null);
  currentCharacter = this.selectedCharacter.asObservable();

  private homeworld = new BehaviorSubject<any>(null);
  currentHomeworld = this.homeworld.asObservable();

  constructor(private http: HttpClient) { }

  getCharacters(url) : Observable<any> {
    return this.http.get(url).map(data => {
      return data;
    });
  }

  setCurrentCharacter(character: any) {
    this.selectedCharacter.next(character);
    this.getHomeworld(character.homeworld).subscribe(world => this.homeworld.next(world));
  }

  getHomeworld(uri: string) : Observable<any> {
    return this.http.get(uri).map(data => {
      var h = data["name"];
      return h;
    });
  }

}
