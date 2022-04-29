import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchBarService {


  constructor(private http: HttpClient) { }


  getDataset(value:any) {
    return this.http.post("http://10.251.2.20:8880/search/"+ value, {
      headers: new HttpHeaders({
        'accept': 'application/json'
      })
    })
  }

  getMetadata(value:any) {
    return this.http.post("http://10.251.2.20:8880/reports/" + value, {
      headers: new HttpHeaders({
        'accept': 'application/json'
      })
    })
  }
}
