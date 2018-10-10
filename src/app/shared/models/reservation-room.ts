import { Reservation } from './reservation';

export class ReservationRoom {
    room_id: number;
    reservations: Reservation [];

    constructor(room_id: number, reservations: Reservation []) {
        this.room_id = room_id;
        this.reservations = reservations;
    }
}
