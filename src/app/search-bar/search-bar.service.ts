import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchBarService {


  constructor(private http: HttpClient) { }


  // getDataset(value: any) {
  //   let body = {};
  //   body = { "search_query": value };

  //   return this.http.post("http://10.251.2.20:8889/DFS/KPI_Search/kpi_search/", body, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     })
  //   })
  // }

  getMetadata(value: any) {
    let body = {};
    body = { "search_query": value };

    return this.http.post("http://10.251.2.20:8889/DFS/Report_Search/report_search/", body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
  }

  // searchAuth() {
  //   return this.http.post("http://10.251.2.20:8889/DFS/KPI_Search/kpi_authcache/", {
  //     headers: new HttpHeaders({
  //       'Accept': 'application/json'
  //     })
  //   })
  // }

  reportAuth(){
    return this.http.post("http://10.251.2.20:8889/DFS/Report_Search/report_auth/", {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    })
  }


}
