import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Pokemon } from './pokemon';

@Injectable()
export class AppService {
  private minmaxurl =
    'http://localhost:9080/CrunchifyRESTJerseyExample/challenge/process/minmax/';

  constructor(private http: Http) {}

  getResponse(inputNumbers) {
    return this.http
      .get(this.minmaxurl + inputNumbers)
      .map(data => {
        data.json();
        console.log(data);
        return data.json();
      })
      .catch(this.handleError);
  }

  // Catch errors from methods
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
