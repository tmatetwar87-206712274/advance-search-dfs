import { Component } from '@angular/core';
import data from '../../assets/data/data.json';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SearchBarService } from './search-bar.service';
import { NgxSpinnerService } from "ngx-spinner"

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
  imageSrc = 'assets/data/logo.png';
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
  tmpmetaData: any = [];
  isError:any=false;
  Error:any;

  constructor(
    private router: Router,
    private searchBarService: SearchBarService,
    private SpinnerService: NgxSpinnerService,
    
    ) {}

  ngOnInit(): void {

    //this.searchBarService.searchAuth().subscribe((response: any) => { });
    this.searchBarService.reportAuth().subscribe((response: any) => { });

  }


  onSelect(event: any): void {
    this.isError=false;
    if (event && !event.hasOwnProperty('item')) {
      this.dataSet = [];
      this.metadata = [];
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


      this.searchBarService.getMetadata(event).subscribe((response: any) => {
        if(response['RESOURCENAME']){
        this.isVisible = true;
        var resultset: any = [];
        resultset.push(response);
        this.metadataColumns = Object.keys(resultset[0]);

        // this.tmpmetaData=this.metadataColumns;
        // var index = this.metadataColumns.indexOf("SOURCELINK");
        // if (index !== -1) {
        //   this.metadataColumns.splice(index, 1);
        // }
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
        this.tmpmetaData = this.metadata;
        var index = this.metadatacolumnsToDisplay.indexOf("SOURCELINK");
        if (index !== -1) {
          this.metadatacolumnsToDisplay.splice(index, 1);
        }
        this.SpinnerService.hide();
        this.isError=false;
      }
      else
      {
        this.SpinnerService.hide();
        this.isError=true;
        this.Error=response;
        
      }
      }, (error) => {                              //Error callback
        console.log(error);
        this.SpinnerService.hide();
        this.isVisible = false;

      })
    }

  }

  goToLink(url: string) {

    for (var i = 0; i < this.tmpmetaData.length; i++) {
      if (url == this.tmpmetaData[i]["RESOURCENAME"]) {
        window.open(this.tmpmetaData[i]["SOURCELINK"], "_blank");
        break;

      }
    }
  }

  onClick() {
    this.router.navigate(['']);
  }

  keyUp(event: any): void {
    if (event.code == 'Enter') {
      this.onSelect(event.target.value);
    }

  }
}