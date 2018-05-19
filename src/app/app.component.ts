import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private concertsUrl = './assets/concerts.json';

  concerts : string [];

  constructor (private httpService: HttpClient) {}

  ngOnInit() {
    this.httpService.get(this.concertsUrl)
      .subscribe(
        data => {
          this.concerts = data["concerts"] as string [];
          console.log(this.concerts[1]);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );

  }

}
