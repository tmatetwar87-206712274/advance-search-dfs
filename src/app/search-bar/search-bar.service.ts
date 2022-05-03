import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchBarService {


  constructor(private http: HttpClient) { }


  getDataset(value:any) {
    return this.http.get<any>('assets/dataSet.json');

  }

  getMetadata() {
    return this.http.get<any>('assets/metaData.json');
    // .toPromise()
    // .then(data => { return data; });
  }
}
