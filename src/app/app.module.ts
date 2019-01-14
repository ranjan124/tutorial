import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HtmltutorialComponent } from './htmltutorial/htmltutorial.component';
import { ScsstutorialComponent } from './scsstutorial/scsstutorial.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
@NgModule({
  declarations: [
    AppComponent,
    HtmltutorialComponent,
    ScsstutorialComponent,
    NavComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
