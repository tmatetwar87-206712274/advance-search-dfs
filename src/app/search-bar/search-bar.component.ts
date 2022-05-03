import { Component } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import data from '../../assets/data/data.json';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SearchBarService } from './search-bar.service';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ],
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  columns!: any[];

  title = 'advanceSearch';
  selectedOption: any;
  tableData!: any[];

  datasetColumns: string[] = [];
  datasetcolumnsToDisplay: string[] = [];
  metadataColumns: string[] = [];
  metadatacolumnsToDisplay: string[] = [];
  data: any = [];
  isVisible = false;
  selectedValue: string | undefined;
  public questions: { id: number, name: string }[] = data;
  dataset: any;
  metadata: any = [];
  dataSet: any = [];
  hyperLink: any;
  sourceLink = "SOURCELINK";

  constructor(
    private router: Router,
    private searchBarService: SearchBarService) { }

  ngOnInit() {
    // this.tableService.getDataset().subscribe((response: any) => {

    //   this.dataset = response;
    //   this.datasetColumns = this.dataset.columnNames;
    //   this.datasetcolumnsToDisplay = this.datasetColumns;

    //   this.dataset.data.forEach((data: any, index1: any) => {
    //     let datatemp: any = {};
    //     this.datasetColumns.forEach((key: any, index2: any) => {
    //       datatemp[key] = data[index2];
    //     });
    //     this.dataSet.push(datatemp);
    //   });

    // });

    // this.tableService.getMetadata().subscribe((response: any) => {
    //   var values: any;
    //   this.metadataColumns = Object.keys(response[0]);
    //   var index = this.metadataColumns.indexOf("SOURCELINK");
    //   // if (index !== -1) {
    //   //   this.metadataColumns.splice(index, 1);
    //   // }

    //   // this.hyperLink = response[0].SOURCELINK;
    //   // delete response[0].SOURCELINK

    //   this.metadatacolumnsToDisplay = this.metadataColumns;
    //   let tmpvalues: any;
    //   tmpvalues = Object.values(response);
    //   let a = Object.keys(response[0])

    //   let b = Object.keys(tmpvalues[0][a[0]]).length;

    //   for (var i = 0; i < b; i++) {
    //     tmpvalues.forEach((data: any, index1: any) => {
    //       let datatemp: any = {};

    //       this.metadataColumns.forEach((key: any, index2: any) => {

    //         datatemp[key] = data[key][i];

    //       });
    //       this.metadata.push(datatemp);


    //     });

    //   }

    // });


  }


  onSelect(event: TypeaheadMatch): void {
    this.isVisible = true;

    this.searchBarService.getDataset(event.value).subscribe((response: any) => {

      this.dataset = response;
      this.datasetColumns = this.dataset.columnNames;
      this.datasetcolumnsToDisplay = this.datasetColumns;

      this.dataset.data.forEach((data: any, index1: any) => {
        let datatemp: any = {};
        this.datasetColumns.forEach((key: any, index2: any) => {
          datatemp[key] = data[index2];
        });
        this.dataSet.push(datatemp);
      });

    });


    this.searchBarService.getMetadata().subscribe((response: any) => {
      var values: any;
      this.metadataColumns = Object.keys(response[0]);
      var index = this.metadataColumns.indexOf("SOURCELINK");



      this.metadatacolumnsToDisplay = this.metadataColumns;
      let tmpvalues: any;
      tmpvalues = Object.values(response);
      let a = Object.keys(response[0])

      let b = Object.keys(tmpvalues[0][a[0]]).length;

      for (var i = 0; i < b; i++) {
        tmpvalues.forEach((data: any, index1: any) => {
          let datatemp: any = {};

          this.metadataColumns.forEach((key: any, index2: any) => {

            datatemp[key] = data[key][i];

          });
          this.metadata.push(datatemp);


        });

      }

    });
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  
  onClick() {
    this.router.navigate(['']);
  }
}