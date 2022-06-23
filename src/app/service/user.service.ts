import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { ApiResponse } from '../model/api.response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = 'https://rahbar2.biharanjuman.org/userTypes/all';

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}`);
  }

  createUser(User: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}`, User);
  }
}
