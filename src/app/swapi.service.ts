import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class SwapiService {

  constructor(private http: HttpClient) { }

  getCharacters() : Observable<any> {
    return this.http.get('https://swapi.co/api/people/').map(data => {
      var chars = data['results'];
      return chars;
    })
  }

}
