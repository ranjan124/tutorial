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
import { Grid4Component } from './grid4/grid4.component';
import { Grid5Component } from './grid5/grid5.component';
import { Grid6Component } from './grid6/grid6.component';
import { Grid7Component } from './grid7/grid7.component';
import { Grid8Component } from './grid8/grid8.component';
import { Tut1Component } from './tut1/tut1.component';
import { Tut2Component } from './tut2/tut2.component';
import { Tut3Component } from './tut3/tut3.component';
import { Tut4Component } from './tut4/tut4.component';
import { Tut5Component } from './tut5/tut5.component';
import { Tut6Component } from './tut6/tut6.component';
import { Tut7Component } from './tut7/tut7.component';
import { Tut8Component } from './tut8/tut8.component';
@NgModule({
  declarations: [
    AppComponent,
    HtmltutorialComponent,
    ScsstutorialComponent,
    NavComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component,
    Grid4Component,
    Grid5Component,
    Grid6Component,
    Grid7Component,
    Grid8Component,
    Tut1Component,
    Tut2Component,
    Tut3Component,
    Tut4Component,
    Tut5Component,
    Tut6Component,
    Tut7Component,
    Tut8Component
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
