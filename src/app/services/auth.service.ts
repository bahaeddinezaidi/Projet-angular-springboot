import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8082/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private loggedInUser: any;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', { username, password }, httpOptions);
  }
  
  setLoggedInUser(user: any): void {
    this.loggedInUser = user;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }
  logout(): void {
    this.loggedInUser = null;
  }
  isLoggedIn(): boolean {
    return !!this.getLoggedInUser();
  }
  

  register(username: string, email: string, password: string, roles: string[]): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      { username, email, password, roles },
      httpOptions
    );
  }
  confirmLogout(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const confirmation = window.confirm('Ready to Leave?\nSelect "Logout" below if you are ready to end your current session.');
      observer.next(confirmation);
      observer.complete();
    })
}
}

