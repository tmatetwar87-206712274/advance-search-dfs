import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSort, Sort} from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table';

export interface Table {
 thisYear: number;
 lastYear: number;
 reportData:string,
 link: string;
  
}


const ELEMENT_DATA: Table[] = [
  {thisYear: 12.88 ,lastYear:32.2,  reportData: 'WWDSF Summary Report',link:"https://insightbi.dfs.com/rubik/embed/mstr/96764E3611E0F68100100080723EA7A0/D48B4F461C47EFF9934D62AFCFF94A0D"},
  {thisYear: 12.88 , lastYear:32.2 , reportData: 'Market Basket Analysis',link:"http://ec2-18-138-237-66.ap-southeast-1.compute.amazonaws.com:8085/ai_dashboard/html/image-recognition.html"},
  {thisYear: 12.88,lastYear:32.2 , reportData:'Image Similarity Search' ,link:'http://ec2-18-138-237-66.ap-southeast-1.compute.amazonaws.com:8085/ai-dashboard/ProductRecommendation.html' },
 
];

@Component({
  selector: 'app-updatedtable',
  templateUrl: './updatedtable.component.html',
  styleUrls: ['./updatedtable.component.css']
})
export class UpdatedtableComponent implements OnInit {

  constructor() { }
  // dataSource!: MatTableDataSource<Table>;


  ngOnInit(): void {
  }

  displayedColumns: string[] = [ 'thisYear','lastYear','reportData'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  


}
