import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {ThreadsComponent} from './threads/threads.component';
import {ShowDecisionModelComponent} from './show-decision-model/show-decision-model.component'

const routes: Routes = [
	{ path: '', component:MainComponent},
	{ path: 'main', component:MainComponent},
	{ path: 'showDecisionModel/:uuid', component: ShowDecisionModelComponent},
	{ path: 'threads', component: ThreadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
