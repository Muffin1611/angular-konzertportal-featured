import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Concert } from './concert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private concertsUrl = 'assets/concerts.json';

  concerts : Concert[];

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.getConcerts()
      .subscribe(concerts => this.concerts);
  }

  getConcerts(): Observable<Concert[]> {
    return this.http.get(this.concertsUrl)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
