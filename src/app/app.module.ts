import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StocksService } from './services/stocks.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
