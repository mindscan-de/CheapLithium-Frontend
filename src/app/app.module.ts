import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ShowDecisionModelComponent } from './show-decision-model/show-decision-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CreateDecisionModelDialogComponent } from './show-decision-model/create-decision-model-dialog/create-decision-model-dialog.component';
import { CopyDecisionModelDialogComponent } from './show-decision-model/copy-decision-model-dialog/copy-decision-model-dialog.component';
import { EditDecisionModelDialogComponent } from './show-decision-model/edit-decision-model-dialog/edit-decision-model-dialog.component';
import { CreateDecisionNodeDialogComponent } from './show-decision-model/create-decision-node-dialog/create-decision-node-dialog.component';
import { EditDecisionNodeDialogComponent } from './show-decision-model/edit-decision-node-dialog/edit-decision-node-dialog.component';
import { EditDecisionNodeTransitionDialogComponent } from './show-decision-model/edit-decision-node-transition-dialog/edit-decision-node-transition-dialog.component';
import { ThreadsComponent } from './threads/threads.component';
import { ShowDecisionThreadComponent } from './show-decision-thread/show-decision-thread.component';
import { CreateDecisionNodeTransitionDialogComponent } from './show-decision-model/create-decision-node-transition-dialog/create-decision-node-transition-dialog.component';
import { KbaseComponent } from './kbase/kbase.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShowDecisionModelComponent ,
	CreateDecisionModelDialogComponent,
	CopyDecisionModelDialogComponent,
	EditDecisionModelDialogComponent,
	CreateDecisionNodeDialogComponent,
	EditDecisionNodeDialogComponent,
	EditDecisionNodeTransitionDialogComponent,
	ThreadsComponent,
	ShowDecisionThreadComponent,
	CreateDecisionNodeTransitionDialogComponent,
	KbaseComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule,
	FormsModule,
	NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
