import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgTableComponent } from './ag-table/ag-table.component';
import { ColumnGroupingComponent } from './column-grouping/column-grouping.component';
import {loginPageComponent} from './login-page/login-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TableComponent } from './table/table.component';
import { UpdatedtableComponent } from './updatedtable/updatedtable.component';

const routes: Routes = [
  {path: '' , component: loginPageComponent},
  {path: 'search' , component: SearchBarComponent},
  {path: 'table' , component: TableComponent},
  {path: 'agtable' , component: AgTableComponent},
  {path: 'grouping' , component: ColumnGroupingComponent},
  {path: 'updateTable' , component: UpdatedtableComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
