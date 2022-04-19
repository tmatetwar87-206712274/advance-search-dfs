import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableService } from '../table.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { loginPageComponent } from '../login-page/login-page.component';
import {MatSort, Sort} from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table';

export interface Table {
  name: string;
  year: number;
  
  frequency: number;
  location:string;
  link: string;
  sales:number;
  resourse:string;
}


// const ELEMENT_DATA: Table[] = [
//   {year: 2018,sales:1045,location:"India", name: 'Nidhi', link: 'https://jsonplaceholder.typicode.com/users',frequency:2018, resourse:"loremipsun"},
//   {year: 2015, sales:1045,location:"India",name: 'Utkarsha', link: 'https://jsonplaceholder.typicode.com/users', frequency:2019,resourse:"loremipsun"},
//   {year: 2019,sales:1045,location:"India", name: 'Ekta', link: 'https://jsonplaceholder.typicode.com/users',frequency: 2018,resourse:"loremipsun" },
//   {year: 2018, sales:1045,location:"India",name: 'Nyasa',link: 'https://jsonplaceholder.typicode.com/users', frequency: 2019, resourse:"loremipsun"},
//   {year: 2020,sales:1045, location:"India",name: 'Anurag',link: 'https://jsonplaceholder.typicode.com/users', frequency: 2018, resourse:"lorem ipsun"},
//   {year: 2019,sales:1045,location:"India", name: 'Sarang', link: 'https://jsonplaceholder.typicode.com/users', frequency: 2019,resourse:"lorem ipsun"},
//   {year: 2016,sales:1045,location:"India", name: 'Purvansha', link: 'https://jsonplaceholder.typicode.com/users', frequency: 2018,resourse:"lorem ipsun"},
//   {year: 2019,sales:1045,location:"India", name: 'Kimaya', link: 'https://jsonplaceholder.typicode.com/users', frequency: 2019,resourse:"lorem ipsun"},
//   {year: 2019, sales:1045,location:"India",name: 'Lekha',link: 'https://jsonplaceholder.typicode.com/users', frequency: 2018,resourse:"lorem ipsun"},
//   {year: 2018,sales:1045,location:"India", name: 'Ravi',link: 'https://jsonplaceholder.typicode.com/users', frequency: 2019,resourse:"lorem ipsun"},
// ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  table : any;
  todoData:any
  userData:any
  slectedRowData :any[] = [];
  public newArr=[];
  selectedItem: any;
  results:any;
  // dataSource!: MatTableDataSource<Table>;
  
  constructor(private service:TableService ,private http: HttpClient,private dialog: MatDialog) { }

  displayedColumns: string[] = [ 'sales','location','year','name','link', 'resourse','frequency' ,'deleteEmployee'];
  //  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  
   dataSource!: MatTableDataSource<Table>;

  @ViewChild(MatSort) sort = new MatSort();
 


  openDialogWithTemplateRef(templateRef: TemplateRef<any>,element:any) {
    this.slectedRowData=[]
   var data=element;
    this.dialog.open(templateRef);
    this.dataSource
    console.log("helloo",this.dataSource);
    console.log("elementtttttttt",element);
   this.slectedRowData.push(element)
    // this.slectedRowData= element
    console.log("slectedRowData",this.slectedRowData)
    
    
  }
 
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  this.getJoinData();
  
  }

  

  getJoinData(){
    this.service.getDetail().subscribe(data => {
      this.table=data
      this.userData=data[0]
      this.todoData = data[1];
      const arr1=this.userData
      const arr2= this.todoData
      console.log("mat table data ",this.dataSource);
      console.log("original data",this.table);
      this.newArr = this.userData.concat(this.todoData)
      this.userData = [ ...this.userData, ...this.todoData];
      console.log("USER DATA",this.userData);

      const mergeById = (arr1:any, arr2:any) =>
    arr1.map((itm :any)=> ({
      ...arr2.find((item: { id: any; }) => (item.id === itm.id) && item),
      ...itm
    }));

    this.results = mergeById(arr1, arr2);
    console.log("merge data**** ",this.results);
     this.dataSource = new MatTableDataSource<Table>(Object.values(this.results));
    console.log("DATA SAOURCE ",this.dataSource);
        
    });

  }

 getTableToDoData(){
 console.log("getApi",this.table);
  this.service.getTodoData().subscribe((response:any )=> {
  this.table = response;
     });
     }
 

  getTableUserData(){
    this.table=[]
   this.service.getDataset().subscribe((response:any )=> {
   this.table = response;
    // console.log("******************",response);
   })
}

}
