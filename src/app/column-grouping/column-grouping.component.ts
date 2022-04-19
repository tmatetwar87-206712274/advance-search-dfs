import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import 'ag-grid-enterprise';

@Component({
  selector: 'app-column-grouping',
  templateUrl: './column-grouping.component.html',
  styleUrls: ['./column-grouping.component.css']
})
export class ColumnGroupingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public columnDefs: (ColDef | ColGroupDef)[] = [
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
      headerName: 'Sports Results',
      children: [
        { field: 'sport', width: 140 },
        {
          columnGroupShow: 'closed',
          field: 'total',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          columnGroupShow: 'open',
          field: 'bronze',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
      ],
    },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter: true,
  };
  public rowData!: any[];

  onGridReady(params: GridReadyEvent) {
    this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => (this.rowData = data)
      );
     
      
  }

  ngOnInit(): void {
    // this.onGridReady();
  }

}
