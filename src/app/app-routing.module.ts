import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loginPageComponent} from './login-page/login-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  // {path: '' , component: loginPageComponent},
  {path: '' , component: SearchBarComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
