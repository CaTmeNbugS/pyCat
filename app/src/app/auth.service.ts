import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterResponse} from './scripts'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  submitUser(user){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.post<RegisterResponse>('http://localhost:3000/owner/registration', user, {headers: headers});
  }
  getDeclarations(){
    return this.http.get('http://localhost:3000/declarations');
  }
}
