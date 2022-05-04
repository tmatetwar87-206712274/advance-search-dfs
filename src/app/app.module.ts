
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
import {MatTableModule} from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    loginPageComponent,
    

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
    TableModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatSortModule,
    MatButtonModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
