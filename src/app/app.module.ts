
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';      
import { HttpClientModule } from '@angular/common/http';       
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';      
import { SearchBarComponent } from './search-bar/search-bar.component';
import { loginPageComponent } from './login-page/login-page.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    loginPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TypeaheadModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
