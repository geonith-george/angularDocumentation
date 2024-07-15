import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable()
export class AuthService {
  apiUrl = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) {
  }

  // login(credentials: any) { 
  //  return this.http.post('http://localhost:3000/api/authenticate', 
  //     JSON.stringify(credentials));
  // }


  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials)
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
        return response;
      }));
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    return false;
  }
}

