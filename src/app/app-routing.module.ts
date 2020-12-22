import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {ThreadsComponent} from './threads/threads.component';
import {KbaseComponent} from './kbase/kbase.component';
import {ModelsComponent} from './models/models.component';
import {ShowDecisionModelComponent} from './show-decision-model/show-decision-model.component'
import {ShowDecisionThreadComponent} from './show-decision-thread/show-decision-thread.component';
import {ShowKBArticleComponent} from './show-kb-article/show-kb-article.component';
import {ShowDecisionThreadReportComponent} from './show-decision-thread-report/show-decision-thread-report.component';

const routes: Routes = [
	{ path: '', component:MainComponent},
	{ path: 'main', component:MainComponent},
	{ path: 'models', component:ModelsComponent},
	{ path: 'kbase', component:KbaseComponent},
	{ path: 'showArticle/:uuid', component: ShowKBArticleComponent },
	{ path: 'showDecisionModel/:uuid', component: ShowDecisionModelComponent},
	{ path: 'threads', component: ThreadsComponent},
	{ path: 'showDecisionThread/:uuid', component: ShowDecisionThreadComponent},
	{ path: 'showDecisionThreadReport/:uuid', component: ShowDecisionThreadReportComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
