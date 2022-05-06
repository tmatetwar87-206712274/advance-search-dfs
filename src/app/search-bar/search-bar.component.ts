import { Component } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import data from '../../assets/data/data.json';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SearchBarService } from './search-bar.service';
import { NgxSpinnerService } from "ngx-spinner";

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
    private searchBarService: SearchBarService,
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {

    //this.searchBarService.searchAuth().subscribe((response: any) => { });
    this.searchBarService.reportAuth().subscribe((response: any) => { });

  }


  onSelect(event: TypeaheadMatch): void {

    this.dataSet=[];
    this.metadata=[];
    this.SpinnerService.show();

    this.isVisible = false;

    // this.searchBarService.getDataset(event.value).subscribe((response: any) => {
    //   this.isVisible = true;
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

    // }, (error) => {                              //Error callback
    //   this.toastrService.error('Error');
    // })


    this.searchBarService.getMetadata(event.value).subscribe((response: any) => {
      this.isVisible = true;
      var resultset: any = [];
      resultset.push(response);
      this.metadataColumns = Object.keys(resultset[0]);

      this.metadatacolumnsToDisplay = this.metadataColumns;
      let tmpvalues: any;
      tmpvalues = Object.values(resultset);
      let a = Object.keys(resultset[0])

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
      this.SpinnerService.hide();

    }, (error) => {                              //Error callback
      
    })

  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onClick() {
    this.router.navigate(['']);
  }

}