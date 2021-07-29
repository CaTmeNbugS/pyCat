import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterResponse } from './scripts';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  submitUser(user){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.post<RegisterResponse>('http://localhost:3000/owner/registration', user, {headers: headers});
  }
  auth(user){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.post<RegisterResponse>('http://localhost:3000/owner/auth', user, {headers: headers});
  }
  generateCookie(user, token){
    const cookie = '; max-age=2073600'
    document.cookie = encodeURIComponent('token') + '=' + encodeURIComponent(token) + cookie;
    document.cookie = encodeURIComponent('user') + '=' + encodeURIComponent(JSON.stringify(user)) + cookie;
  }
  logOut(){
    const cookie = '; max-age=-1'
    document.cookie = encodeURIComponent('token') + '=' + encodeURIComponent('') + cookie;
    document.cookie = encodeURIComponent('user') + '=' + encodeURIComponent(JSON.stringify('')) + cookie;
    console.log('выход')
  }
  getDeclarations(){
    return this.http.get('http://localhost:3000/declarations');
  }
}
