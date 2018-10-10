import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import {Room} from '../shared/models/room';
import { Reservation } from '../shared/models/reservation';

@Injectable({
  providedIn: 'root'
})

export class AvailableRoomsService {
  readonly  endpoint = 'http://demo3825547.mockable.io/meeting_rooms/';
  readonly  resendpoint = 'http://demo3825547.mockable.io/get_meeting_rooms_reservations/';

  readonly  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
   const body = res;
    return body || { };
  }

  getRoom(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
      map(this.extractData));
  }

  getReservation(): Observable<any> {
    return this.http.get(this.resendpoint).pipe(
      map(this.extractData));
  }

  addReservation(): void {

    this.http.post("http://demo3825547.mockable.io/create_reservation/",
    {
      'res_id': 4007,
      'from_time': '2018-09-30 10:00',
      'to_time': '2018-09-30 12:00',
      'by': 'Mohannad',
      'title': 'Finance Meeting'
    })
    .subscribe(
        data => {
            console.log("successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    );

  }
}
