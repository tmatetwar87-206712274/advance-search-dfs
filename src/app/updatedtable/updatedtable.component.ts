import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UpdatedTableService } from './updatedtable.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { SearchBarService } from '../search-bar/search-bar.service';
import data from '../../assets/data/data.json';
import { TableService } from '../table.service';



@Component({
  selector: 'app-updatedtable',
  templateUrl: './updatedtable.component.html',
  styleUrls: ['./updatedtable.component.css']
})
export class UpdatedtableComponent implements OnInit {

  displayedColumns: string[] = [];
  columnsToDisplay: string[] = [];
  data: any = [];
  isVisible = true;
  selectedValue: string | undefined;
  public questions: { id: number, name: string }[] = data;
  dataset: any;
  metadata: any=[];



  constructor(private updatedTableService: UpdatedTableService,
    private searchBarService: SearchBarService,
    private tableService: TableService) {
  }

  ngOnInit() {

    this.tableService.getDataset().subscribe((response: any) => {
      this.dataset = response;
      this.displayedColumns = this.dataset.columnNames;
      this.columnsToDisplay = this.displayedColumns;

      this.dataset.data.forEach((data: any, index1: any) => {
        let datatemp: any = {};
        this.displayedColumns.forEach((key: any, index2: any) => {
          datatemp[key] = data[index2];
        });
        this.data.push(datatemp);
      });

    });

    this.tableService.getMetadata().subscribe((response: any) => {
      

      this.displayedColumns = Object.keys(response[0]); 
      console.log("Displayed Names",this.displayedColumns);
      this.columnsToDisplay = this.displayedColumns;
      console.log("Columns name",this.columnsToDisplay);
      Object.values(response[0]).forEach((value:any, index) => {
        let datatemp: any = {};
        this.displayedColumns.forEach((key: any, index2: any) => {
          datatemp[key] = value[index2];
        });
        this.metadata.push(datatemp);

       });


      console.log("************", this.metadata);
    })

  }

  onSelect(event: TypeaheadMatch): void {
    this.isVisible = false;
  }


  getTableDataset() {
    this.tableService.getDataset().subscribe((response: any) => {
      this.dataset = response;
    })
  }


  getTableMetaData() {
    this.tableService.getMetadata().subscribe((response: any) => {
      this.metadata = response;
      console.log("*****************", this.metadata);
    })
  }
}