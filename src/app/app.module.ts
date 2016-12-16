import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { apiRAMLComponent } from './api-raml.component';
import { apiStandardComponent } from './api-standard.component';
import { contributeComponent } from './contribute.component';
import { homeComponent } from './home.component';
import { navBarComponent } from './nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    apiRAMLComponent,
    apiStandardComponent,
    contributeComponent,
    homeComponent,
    navBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
