import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StocksService } from './services/stocks.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
