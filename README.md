# 🏨 Hotel Booking Application

A responsive hotel room booking web application built with **Angular 17**, leveraging **NgBootstrap** for UI components and **MockAPI** for data handling. Users can browse available rooms, filter and search by room name or room type, and book rooms through a clean modal interface.

## 🚀 How to Run the Application

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- Angular CLI: Install globally using:
  npm install -g @angular/cli

### Steps to Run

1. Clone the repository  
   git clone https://github.com/your-username/hotel-booking.git  
   cd hotel-booking

2. Install dependencies  
   npm install

3. Start the development server  
   npm start  
   or  
   ng serve

4. Open the app in your browser  
   Navigate to: http://localhost:4200

The app will automatically reload if you change any of the source files.

## 🎯 Design Decisions

### 1. Component-Based Architecture  
The app follows Angular’s best practices using modular, reusable components:  
- RoomCardComponent: Displays individual room details.  
- BookRoomModalComponent: Handles booking logic in a modal.  
- RoomsListComponent: Manages filtering, search, and room list rendering.

### 2. Reactive Forms with Validation  
Used Angular ReactiveFormsModule and FormBuilder to create a robust booking form.  
Client-side validation ensures required fields (guest name, check-in/out) are filled before submission.

### 3. State Management via Services  
RoomService centralizes API interactions using HttpClient.  
The service fetches and updates room data, ensuring consistency across components.

### 4. Real-Time Data Updates  
After a room is booked, the RoomsListComponent reloads the room list to reflect the updated availability instantly.  
Success/error feedback is provided using SweetAlert2 for better UX.

### 5. Search & Filter Functionality  
Implemented client-side filtering:  
- Search by room name (case-insensitive).  
- Filter by room type with dynamic dropdown populated from data.  
Filters are applied manually via buttons to avoid excessive re-rendering.

# HotelBooking

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
