import { Tut8Component } from './tut8/tut8.component';
import { Tut7Component } from './tut7/tut7.component';
import { Tut6Component } from './tut6/tut6.component';
import { Tut5Component } from './tut5/tut5.component';
import { Tut4Component } from './tut4/tut4.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';
import { Grid5Component } from './grid5/grid5.component';
import { Grid6Component } from './grid6/grid6.component';
import { Grid7Component } from './grid7/grid7.component';
import { Grid8Component } from './grid8/grid8.component';
import { HtmltutorialComponent } from './htmltutorial/htmltutorial.component';
import { ScsstutorialComponent } from './scsstutorial/scsstutorial.component';
import { Tut1Component } from './tut1/tut1.component';
import { Tut2Component } from './tut2/tut2.component';
import { Tut3Component } from './tut3/tut3.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/tuthtml',
    pathMatch: 'full'
  },
  { path: 'tuthtml', component: HtmltutorialComponent },
  { path: 'tutscss', component: ScsstutorialComponent },
  { path: 'tutgrid1', component: Grid1Component },
  { path: 'tutgrid2', component: Grid2Component },
  { path: 'tutgrid3', component: Grid3Component },
  { path: 'tutgrid4', component: Grid4Component },
  { path: 'tutgrid5', component: Grid5Component },
  { path: 'tutgrid6', component: Grid6Component },
  { path: 'tutgrid7', component: Grid7Component },
  { path: 'tutgrid8', component: Grid8Component },
  { path: 'tut1', component: Tut1Component },
  { path: 'tut2', component: Tut2Component },
  { path: 'tut3', component: Tut3Component },
  { path: 'tut4', component: Tut4Component },
  { path: 'tut5', component: Tut5Component },
  { path: 'tut6', component: Tut6Component },
  { path: 'tut7', component: Tut7Component },
  { path: 'tut8', component: Tut8Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
