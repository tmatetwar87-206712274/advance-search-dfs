import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class TableService {
  // public baseUrl="https://jsonplaceholder.typicode.com/todos";
  // public apiURL="https://jsonplaceholder.typicode.com/users";

  public baseUrl="assets/dataSet.json";
  public apiURL="assets/metaData.json";


  constructor(private http: HttpClient, private router: Router) { }

  getTodoData():Observable<any>{
    // return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
    // /return this.http.get<any>( "https://jsonplaceholder.typicode.com/posts");
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos")
}
 
getUserData():Observable<any>{
     return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
    // return this.http.get<any>( "https://jsonplaceholder.typicode.com/posts");
}

getDataset() {
  return this.http.get<any>('assets/dataSet.json');
  // .toPromise()
  // .then(data => { return data; });
}

getMetadata() {
  return this.http.get<any>('assets/metaData.json');
  // .toPromise()
  // .then(data => { return data; });
}

  public getData(page:number){

    return this.http.get(this.baseUrl +'?page=' + page );

  }

  getDetail(): Observable<any> {
    let gettodo = this.http.get(this.baseUrl)
    let getuser = this.http.get(this.apiURL);
    // let getLastPoint = this.http.get(this.apiURL + '/2019-09-17?access_key=' + this.apiKey + '&base=' + base);
    return forkJoin([gettodo, getuser]);};


}
