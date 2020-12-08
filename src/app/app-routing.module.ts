import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {ThreadsComponent} from './threads/threads.component';
import {KbaseComponent} from './kbase/kbase.component';
import {ShowDecisionModelComponent} from './show-decision-model/show-decision-model.component'
import {ShowDecisionThreadComponent} from './show-decision-thread/show-decision-thread.component';

const routes: Routes = [
	{ path: '', component:MainComponent},
	{ path: 'main', component:MainComponent},
	{ path: 'kbase', component:KbaseComponent},
	{ path: 'showDecisionModel/:uuid', component: ShowDecisionModelComponent},
	{ path: 'threads', component: ThreadsComponent},
	{ path: 'showDecisionThread/:uuid', component: ShowDecisionThreadComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
