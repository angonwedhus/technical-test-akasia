import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private jsonUrl = 'assets/users.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  updateData(updatedData: any[]): Observable<any> {
    return this.http.put(this.jsonUrl, updatedData);
  }
}
