import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  searchName: string = '';
  selectedType: string = 'all';
  roomTypes: string[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.roomService.getRooms().subscribe({
      next: (data) => {
        this.rooms = data;
        this.filteredRooms = data;
        this.roomTypes = [...new Set(data.map((room) => room.type))];
      },
      error: () => {
        Swal.fire('Error', 'Failed to load rooms.', 'error');
      },
    });
  }

  onRoomBooked(): void {
    this.loadRooms();
    Swal.fire('Success', 'Room booked successfully!', 'success');
  }

  applyFilters(): void {
    this.filteredRooms = this.rooms.filter((room) => {
      const matchesSearch =
        this.searchName === '' ||
        room.name.toLowerCase().includes(this.searchName.toLowerCase());
      const matchesType =
        this.selectedType === 'all' || room.type === this.selectedType;
      return matchesSearch && matchesType;
    });
  }
}
