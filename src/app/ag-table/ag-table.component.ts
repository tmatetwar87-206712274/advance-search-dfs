import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from '../table.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
// import { ColourCellRenderer } from './colour-cell-renderer.component';
// Required feature modules are registered in app.module.ts


@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.css']
})
export class AgTableComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid!: AgGridAngular; 

  constructor(private service:TableService ,private http: HttpClient) { }
  table :any

  ngOnInit(): void {
    // this.rowData = this.http.get("https://jsonplaceholder.typicode.com/comments");
    // this.rowData = this.http.get("https://jsonplaceholder.typicode.com/posts");

  }
  // rowData: any;
  // ColDef: any;
  columnDefs= [
    // { field: 'make' },

    {
      headerName: 'Athlete Details',
      children: [
        {
          field: 'athlete',
          width: 180,
          filter: 'agTextColumnFilter',
        },
        {
          field: 'age',
          width: 90,
          filter: 'agNumberColumnFilter',
        },
        { headerName: 'Country', field: 'country', width: 140 },
      ],
      
    },
    {
      headerName: 'Sports Results ',
      children: [
        {
          field: 'name',
          width: 180,
          filter: 'agTextColumnFilter',
        },
        {
          field: 'sourceLink',
          width: 90,
          filter: 'agNumberColumnFilter',
        },
        { headerName: 'Resource', field: 'resource', width: 140 },
        { headerName: 'Updated Frequency', field: 'updatefrequency', width: 140 },
        { headerName: 'Action', width: 140  , colId: 'action',
        // cellRenderer: 'buttonRenderer',
        cellRenderer: function(params:any) {
          return '<span><i class="material-icons">launch</i></span>'
     },
     cellEditorPopup: true,
     cellEditorParams: {
      // values: colors,
      // cellRenderer: ColourCellRenderer,
    }
    //  cellRendererParams: {
    //   clicked: function(field: any) {
    //   alert(`${field} was clicked`);
    //   }
    //   }

       },
      {

        headerName: 'Edit',
        // icons: myIcons,
    
        cellRenderer: 'buttonRenderer',
    
        cellRendererParams: {
    
        // onClick: this.onEditButtonClick.bind(this),
    
        label: 'Edit'
    
        },
    
      }

      
      ],
      
    }
  
];

rowData = [
    { athlete: 'Toyota', age: 'Celica', country: 'Nagpur' ,name:"utkrsha", sourceLink:"https://jsonplaceholder.typicode.com/users",resource:"lorem ipsun",updatefrequency:2018},
    { athlete: 'Ford', age: 'Mondeo', country: 32000 ,name:"utkrsha"},
    { athlete: 'Porsche', age: 'Boxter', country: 72000 ,name:"utkrsha"}
];
public defaultColDef: ColDef = {
  sortable: true,
  resizable: true,
  filter: true,
};

// onRowClicked(event: any) {$("#imagemodal").modal("show");}
}

// onRowClicked(event) {

//   this.dialog.open(CommentsComponent);
// }
  // columnDefs = [
  //   {
  //     headerName: "userId",
  //     field: "userId",
  //     filter: true,
  //     sortable: true,

  //   },
  //   {
  //     headerName: "id",
  //     field: "id",
  //     // pinned: 'left' ,
  //     sortable: true,
  //     filter: true,

  //   },
  //   {
  //     headerName: "title",
  //     field: "title",
  //     sortable: true,
  //     filter: true
  //   },
  //   // {
  //   //   headerName: "body",
  //   //   field: "body",
  //   //   sortable: true,
  //   //   filter: true,
  //   //   rowDrag: true

  //   // },
  //   {
  //     headerName: "body",
  //     field: "body",
  //     sortable: true,
  //     filter: true,
  //     width: 500,
  //     // checkboxSelection: true
  //   }
  // ];

//   columnDefs = [
//     {
//       headerName: "id",
//       field: "id",
//       filter:true,
//       sortable:true,
     
//       headerClass: "bg-green"
//     },
//     {
//       headerName: "name",
//       field: "name",
     
//      sortable:true,
//      filter:true,

//     },
//     {
//       headerName: "username",
//       field: "username",
//       sortable:true,
//       filter:true,
//       headerClass: "bg-green"
      
//     },
//     {
//      headerName: "email",
//      field: "email",
//      sortable:true,
//      filter:true
      
//     },
    
     
  
//     {
//       headerName: 'Address', field: 'address', 
//           valueGetter(params:any) {
//           return params.data.address.street + ' ' + params.data.address.suite +' ' + params.data.address.city +' ' + params.data.address.zipcode;
//       }, suppressMenu: true,
//       headerClass: "bg-green"
//   },
//   {
//     headerName: 'Geo', field: 'geo', valueGetter(params:any) {
//         return  params.data.address.geo.lat + ' ' + params.data.address.geo.lng;
//     },suppressMenu: true,
//   },
//   {
//     headerName: "phone",
//     field: "phone",
//     filter:true,
//     sortable:true,
    
//     headerClass: "bg-green"
//   },
//   {
//     headerName: "website",
//     field: "website",
    
//     cellStyle: (params:any) => {

//       var web  = params.value;
//       var substring = ".org";
//       var net =".net"
//       var info =".info"
//       var io =".io"
//       console.log("*******",web.includes(substring));
//       console.log("######################",web);
      
//       if (web.includes(substring)) {
//           //mark police cells as red
//           return {color: 'red', backgroundColor: 'yellow'};
//       }
//      else if (web.includes(net)) {
//         //mark police cells as red
//         return {color: 'red', backgroundColor: 'Indigo'};
//     }
//     else {
//       //mark police cells as red
//       return ;
//   } 

//       return null;
//   },

//   //workable pranali logic 
//   // cellStyle: (params: any) => {

//   //   if (params.value.endsWith("org")) {

//   //     return { color: 'black', backgroundColor: '#2ad9c1' };

//   //   } else if (params.value.endsWith("net")) {

//   //     return { color: 'black', backgroundColor: '#ff4700' };

//   //   }else  {

//   //     return { color: 'Black', backgroundColor: 'white' };

//   //   }

//   // }, suppressMenu: true,
   

  
//     filter:true,
//     sortable:true,

   
  
//   },
//   {
//     headerName: 'company', field: 'company', valueGetter(params:any) {
//         return  params.data.company.name + ' ' + params.data.company.catchPhrase + ' ' + params.data.company.bs;
//     },suppressMenu: true,
//     headerClass: "bg-green"
//   },




//   ];
//   rowData: any;

//   getTableUserData(){

//     this.table=[]
//     console.log("getApi",this.table);
  
      
//     this.service.getUserData().subscribe((response:any )=> {
//       // do something with the data
//     //  console.log("******************",data);
//     this.table = response;
//     // this.rowData=response;
//      console.log("******************",response);
  
     
//     })
    
   
//   }

//   // this.getRowStyle : (params:any) => {
//   //   if (params.node.rowIndex % 2 === 0) {
//   //       return { background: 'red' };
//   //   }
// // };

 
//   // constructor(private http: HttpClient) { }

//   ngOnInit(): void {

//     this.rowData = this.http.get("https://jsonplaceholder.typicode.com/users");
//   }

// }
