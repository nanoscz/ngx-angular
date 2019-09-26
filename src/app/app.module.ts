import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/** Third party modules */
import { NgxBootstrapModule } from './ngx-bootstrap.module';

import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
