import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialFooterComponent } from './material-footer/material-footer.component';
import {MatButtonModule} from '@angular/material/button';
import { FooterModule } from '../../dist/footer';
@NgModule({
  declarations: [
    AppComponent,
    MaterialFooterComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
