import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:8082'; // Remplacez par l'URL de base de votre backend

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const url = `${this.baseUrl}/login`;
    
    return this.http.post(url, { username, password });
  }

  register(username: string, email: string, password: string) {
    const url = `${this.baseUrl}/register`;
    
    return this.http.post(url, { username, email, password });
  }
}
