import { HtmltutorialComponent } from './htmltutorial/htmltutorial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScsstutorialComponent } from './scsstutorial/scsstutorial.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/tuthtml',
    pathMatch: 'full'
  },
  { path: 'tuthtml', component: HtmltutorialComponent },
  { path: 'tutscss', component: ScsstutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
