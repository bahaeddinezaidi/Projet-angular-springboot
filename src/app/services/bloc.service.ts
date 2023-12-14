import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bloc } from '../entities/bloc';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private apiUrl = 'http://localhost:8081/bloc'; 

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    const options = { withCredentials: true };
  
    return this.http.get<Bloc[]>(`${this.apiUrl}/retrieveBlocs`, options);
  }
  

  getBloc(id: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.apiUrl}/retrieveBloc/${id}`);
  }

  addBloc(bloc: Bloc): Observable<any> {
    return this.http.post(`${this.apiUrl}/addBloc`, bloc);
  }

  updateBloc(id: number, updatedBloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.apiUrl}/update/${id}`, updatedBloc);
  }

  deleteBloc(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeBloc/${id}`);
  }
  affecterBlocAFoyer(idBloc: number, idFoyer: number): Observable<Bloc> {
    const url = `${this.apiUrl}/affecterBlocAFoyer?idBloc=${idBloc}&idFoyer=${idFoyer}`;
    return this.http.put<Bloc>(url,null);
  }
}
