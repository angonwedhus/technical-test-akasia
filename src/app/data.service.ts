import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'assets/users.json';

  constructor(private http: HttpClient) { }

  getLoginData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
