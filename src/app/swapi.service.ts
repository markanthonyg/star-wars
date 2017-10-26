import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class SwapiService {

  private messageSource = new BehaviorSubject<string>("default msg");
  currentMessage = this.messageSource.asObservable();
  private selectedCharacter = new BehaviorSubject<any>({});
  currentCharacter = this.selectedCharacter.asObservable();

  private homeworld = new BehaviorSubject<any>({});
  currentHomeworld = this.homeworld.asObservable();

  constructor(private http: HttpClient) { }

  getCharacters() : Observable<any> {
    return this.http.get('https://swapi.co/api/people/').map(data => {
      var chars = data['results'];
      return chars;
    });
  }

  setCurrentCharacter(character: any) {
    this.selectedCharacter.next(character);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getHomeworld(uri: string) : Observable<any> {
    return this.http.get(uri).map(data => {
      var h = data["name"];
      return h;
    });
  }

}
