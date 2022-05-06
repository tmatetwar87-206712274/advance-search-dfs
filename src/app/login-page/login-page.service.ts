import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {


  constructor(private http: HttpClient) { }

  isLogged(data: FormGroup): Observable<any> {
    const body = new HttpParams()
    .set('username', data.value['username'])
    .set('password', data.value['password'])
    .set('rememberme', data.value['rememberme'])

    return this.http.post("https://my2.thoughtspot.cloud/callosum/v1/tspublic/v1/session/login", body, {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'X-Requested-By': 'ThoughtSpot'        
      })
    });

  }

}
