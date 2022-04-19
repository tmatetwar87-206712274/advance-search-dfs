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

  isVisible = true;
  title = 'advanceSearch';
  // imageSrc = 'assets/data/logo.png';
  selectedValue: string | undefined;
  public questions: { id: number, name: string }[] = data;
  selectedOption: any;
  tableData!:any[];


  // data!: [
  //   {
  //     "sales": "1000";
  //     "location": "Macau",
  //     "year": "2019",
  //     "resourcename": "Nidhi.Khanna@dfs.com",
  //     "sourcelink": "https://insightbi.dfs.com/rubik/embed/mstr/96764E3611E0F68100100080723EA7A0/D48B4F461C47EFF9934D62AFCFF94A0D"
  //   }

  // ];

  constructor(
    private router: Router,
    private searchBarService:SearchBarService
  ) { }

  ngOnInit() {
    this.searchBarService.getData().then(data => this.tableData = data);

    this.columns = [
      { field: 'sales', header: 'Sales' },
      { field: 'location', header: 'Location' },
      { field: 'year', header: 'Year' },
      { field: 'resourcename', header: 'Resource Name' },
      { field: 'sourcelink', header: 'Source Link' }

    ];
  }

  
  onSelect(event: TypeaheadMatch): void {
    this.isVisible = false;
  }

  onClick() {
    this.router.navigate(['']);
  }
}