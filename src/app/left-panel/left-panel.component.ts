import { Component, OnInit, Input } from '@angular/core';
import {Room} from '../shared/models/room';
import { AvailableRoomsService } from '../services/available-rooms.service';
import { Reservation } from '../shared/models/reservation';
import { ReservationRoom } from '../shared/models/reservation-room';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {


  rooms: any = [];
  RoomFinal: Room[] = [];

  reservations: any = [];
  ReservationsFinal: ReservationRoom[] = [];

  constructor(public rest: AvailableRoomsService) { }

  ngOnInit() {
    this.getRoom();
  }

  getRoom() {
    this.rooms = [];
    this.rest.getRoom().subscribe((data: {}) => {
              this.rooms = data;
              for (var value of this.rooms) {
                this.RoomFinal.push(new Room(value.id, value.title));
                console.log(value.id + ' is ' + value.title);
              }});
  }


}
