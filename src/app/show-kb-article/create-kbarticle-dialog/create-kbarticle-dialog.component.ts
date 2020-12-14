import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { KnowledgeBaseBackendService } from '../../backend-services/knowledge-base-backend.service'

@Component({
  selector: 'app-create-kbarticle-dialog',
  templateUrl: './create-kbarticle-dialog.component.html',
  styleUrls: ['./create-kbarticle-dialog.component.css']
})
export class CreateKBArticleDialogComponent  {
	
	public kbaPageTitle : string = "";
	public kbaPageSummary : string = "";
	public kbaPageContent : string = "";

	constructor(public activeModal: NgbActiveModal, private backendService : KnowledgeBaseBackendService ) {}

	onCreate() : void {
		// TODO use the backendservice to create / if success then close the modalwith the result.
		// FOR NOW we will stick with returning the observable
		
		this.activeModal.close('done')
	}
}
