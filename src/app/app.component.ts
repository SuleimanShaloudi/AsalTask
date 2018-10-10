import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { getLocaleMonthNames } from '../../node_modules/@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]

})
export class AppComponent implements OnInit {
  name = 'MeetingRooms';
  current: Date;
  model2: Date;
  model1: Date;
  month: string ;
  year: number;
  day: string;
  public allowWeekend = false;

  get today() {
    return new Date();
  }
  get getMonth() {
    return this.model1.toLocaleDateString('en-US', {month: 'long'});

  }
  get getYear() {
    return this.model1.getFullYear();
  }
  get getDay() {
    return this.model1.toLocaleDateString('en-US', {weekday: 'long'});
  }
  minDat() {
    const date = new Date();
    return { day: date.getUTCDay(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear()};
  }

  isDisabled(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return  d.getDay() === 6 || d.getDay() === 5;
  }
  ngOnInit() {
    this.current = new Date();
    this.month = this.current.toLocaleDateString('en-US', {month: 'long'});
    this.day = this.current.toLocaleDateString('en-US', {weekday: 'long'});
    this.year = this.current.getFullYear();
    this.model1 = this.today;
  }
}
