import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = '/api';

  constructor(private http: HttpClient) {
  }

  onLogin(formLogin: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/login`,formLogin);
  }
}
