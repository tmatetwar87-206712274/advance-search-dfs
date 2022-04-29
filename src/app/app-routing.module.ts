import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnGroupingComponent } from './column-grouping/column-grouping.component';
import {loginPageComponent} from './login-page/login-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  {path: '' , component: loginPageComponent},
  {path: 'search' , component: SearchBarComponent},
  {path: 'grouping' , component: ColumnGroupingComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
