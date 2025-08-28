import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../models/room.model';
import { RoomService } from '../services/room.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-room-modal',
  templateUrl: './book-room-modal.component.html',
})
export class BookRoomModalComponent {
  @Input() room!: Room;
  bookingForm: FormGroup;
  today: string = new Date().toISOString().split('T')[0];

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

  private validateDates(): boolean {
    const checkIn = this.bookingForm.get('checkIn')?.value;
    const checkOut = this.bookingForm.get('checkOut')?.value;

    if (!checkIn || !checkOut) return true;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Date Range',
        text: 'Check-out date must be after check-in date',
        confirmButtonColor: '#3085d6',
      });
      return false;
    }

    return true;
  }

  onSubmit(): void {
    if (this.bookingForm.valid && this.validateDates()) {
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
