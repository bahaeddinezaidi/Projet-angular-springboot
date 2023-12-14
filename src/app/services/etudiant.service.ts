import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../entities/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
private apiurl="http://localhost:8081/etudiant";

  constructor(private http: HttpClient) { }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiurl}/retrieveAllEtudiants`);
  }

  addEtudiant(etudiant: Etudiant): Observable<any> {
    return this.http.post<Etudiant>(`${this.apiurl}/addEtudiant`, etudiant);
  }

  updateEtudiant(name: String, updatedEtudiant: Etudiant): Observable<Etudiant> {
    // updatedEtudiant.dateNaissence = new Date(updatedEtudiant.dateNaissence).toLocaleDateString();
    return this.http.put<Etudiant>(`${this.apiurl}/updateEtudiant/${name}`, updatedEtudiant);
  }

  removeEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/${id}`);
  }
  getEtudiantByname(name:String):Observable<Etudiant>{
    return this.http.get<Etudiant>(`${this.apiurl}/getEtudiant/${name}`);
  }
}


