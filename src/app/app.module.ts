import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './app/comp1/comp1.component';
import { Comp2Component } from './app/comp2/comp2.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TypeaheadComponent } from './typeahead/typeahead/typeahead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, Comp1Component, Comp2Component, TypeaheadComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TypeaheadModule.forRoot(), BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
