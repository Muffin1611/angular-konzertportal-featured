import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  concerts = [];

  constructor (private http: Http) {}

  ngOnInit() {
    this.getConcerts()
      .subscribe(concerts => this.concerts);
  }

  getConcerts(): Observable<any> {
    return this.http.get('assets/concerts.json')
      .map((response: Response) => {
          console.log("mock data" + response.json());
          return response.json();
        }
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
