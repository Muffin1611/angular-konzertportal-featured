import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

import { Concert } from './concert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private concertsUrl = './assets/concerts.json';

  concerts : Concert [];
  featured : Concert [];

  constructor (private httpService: HttpClient) {}

  ngOnInit() {
    this.httpService.get(this.concertsUrl)
      .subscribe(
        data => {
          this.concerts = data["concerts"] as Concert [];
          this.featured = this.concerts.filter((concert) => concert.featured);
          console.log(this.featured);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );

  }

}
