import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {ShowDecisionModelComponent} from './show-decision-model/show-decision-model.component'

const routes: Routes = [
	{ path: '', component:MainComponent},
	{ path: 'main', component:MainComponent},
	{ path: 'showDecisionModel', component: ShowDecisionModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
