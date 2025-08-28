import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../models/room.model';
import { RoomService } from '../services/room.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-room-modal',
  templateUrl: './book-room-modal.component.html',
})
export class BookRoomModalComponent {
  @Input() room!: Room;
  bookingForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private roomService: RoomService
  ) {
    this.bookingForm = this.fb.group({
      guestName: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const updatedRoom: Room = {
        ...this.room,
        available: 'Booked',
      };

      this.roomService.updateRoom(updatedRoom).subscribe({
        next: () => {
          this.activeModal.close();
        },
        error: () => {
          alert('Failed to book room');
        },
      });
    }
  }
}
