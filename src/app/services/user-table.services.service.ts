import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZWlzYSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTk3NzFjOTUtN2NlYi00YTA1LWI1YWUtMzg5MmVmZWYxNTY5IiwianRpIjoiMmUwODhiMjEtNmYwNS00Y2FiLWI3NTMtY2EzNmUwNTAzZTA1IiwiZXhwIjoxNjk4NTQ4NDA5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDU4LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQyMDAvIn0.J8bhX872-WA8d2O9E317mFbxGTMLu4IZJrZGSVE9sWI';

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`,
});
@Injectable({
  providedIn: 'root',
})
export class UserTableServicesService {
  private apiPort = environment.apiPort;
  private DB_URL = `https://localhost:${this.apiPort}/api/UserTable`;
  constructor(private myClient: HttpClient) {}

  getAllUserReservation(): Observable<any> {
    return this.myClient.get(`${this.DB_URL}/searchByUserId`, { headers });
  }
}
