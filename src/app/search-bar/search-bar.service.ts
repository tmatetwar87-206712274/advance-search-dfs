import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import tableData from '../../assets/data/tabledata.json';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {


  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any>('assets/data/tabledata.json')
    .toPromise()
    .then(data => { return data; });
}


}
