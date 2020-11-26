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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShowDecisionModelComponent ,
	CreateDecisionModelDialogComponent,
	CopyDecisionModelDialogComponent
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
