import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { HtmltutorialComponent } from './htmltutorial/htmltutorial.component';
import { ScsstutorialComponent } from './scsstutorial/scsstutorial.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/tuthtml',
    pathMatch: 'full'
  },
  { path: 'tuthtml', component: HtmltutorialComponent },
  { path: 'tutscss', component: ScsstutorialComponent },
  { path: 'tutgrid1', component: Grid1Component },
  { path: 'tutgrid2', component: Grid2Component },
  { path: 'tutgrid3', component: Grid3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
