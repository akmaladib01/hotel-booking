import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../models/room.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookRoomModalComponent } from '../book-room-modal/book-room-modal.component';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent {
  @Input() room!: Room;
  @Output() booked = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {}

  openBookingModal(): void {
    const modalRef = this.modalService.open(BookRoomModalComponent);
    modalRef.componentInstance.room = this.room;
    modalRef.result.then(() => this.booked.emit());
  }
}
