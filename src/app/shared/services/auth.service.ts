import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8082/api/public';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/singup`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }

    const tokenPayload = this.decodeToken(token);
    if (!tokenPayload || !tokenPayload.exp) {
      return true;
    }

    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(tokenPayload.exp);

    return expirationDate.valueOf() <= new Date().valueOf();
  }

  private decodeToken(token: string): any {
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  }
}
