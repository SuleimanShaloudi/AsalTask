import { Component, OnInit, Input } from '@angular/core';
import { I18nPluralPipe } from '../../../node_modules/@angular/common';
import { Reservation } from '../shared/models/reservation';
import { ReservationRoom } from '../shared/models/reservation-room';
import { AvailableRoomsService } from '../services/available-rooms.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  @Input() day: string;

  reservations: any = [];
  ReservationsFinal: ReservationRoom[] = [];

  constructor(public rest: AvailableRoomsService) { }

  ngOnInit() {
    this.getReservation();
    this.rest.addReservation();
  }

  getReservation() {
    this.reservations = [];
    this.rest.getReservation().subscribe((data: {}) => {
              this.reservations = data;
              let roomReservations : Reservation [] = [];

              for (var value of this.reservations) {

                for ( var res of value.reservations) {
                  roomReservations.push(new Reservation(res['res_id'], res['from_time'], res['to_time'], res['by'], res['title']));
                  console.log( res['res_id'] + 'Hello');
                }

                console.log( value.room_id  );
                this.ReservationsFinal.push(new ReservationRoom(value.room_id , roomReservations));

              }});
  }

}
