import { Component } from '@angular/core';
import { UserTableServicesService } from 'src/app/services/user-table.services.service';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.component.html',
  styleUrls: ['./reserve-table.component.css'],
})
export class ReserveTableComponent {
  reservationTable: any[] = [];
  constructor(private userTableService: UserTableServicesService) {}

  getReservation(reservation: any) {
    console.log('From PArent ');
    console.log(reservation);
    this.reservationTable = reservation;
  }
}
