import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UpdatedTableService {


  constructor(private http: HttpClient) { }
//   getData() {
//     return this.http.get<any>('assets/data/tabledata.json')
//     .toPromise()
//     .then(data => { return data; });
// }


}
