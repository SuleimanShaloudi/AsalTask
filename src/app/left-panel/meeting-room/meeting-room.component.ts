import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.scss']
})
export class MeetingRoomComponent implements OnInit {
  @Input() MeetingRoomName: string;
  @Input() MeetingRoomId: number ;

ngOnInit() {
}

}
