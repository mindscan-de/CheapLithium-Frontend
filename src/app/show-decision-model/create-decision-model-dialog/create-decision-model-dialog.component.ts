import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';

@Component({
  selector: 'app-create-decision-model-dialog',
  templateUrl: './create-decision-model-dialog.component.html',
  styleUrls: ['./create-decision-model-dialog.component.css']
})
export class CreateDecisionModelDialogComponent {
	
	public dmName: string = "";
	public dmDescription: string = "";
	public dmVersion: string = "";
	public dmDisplayName: string = "";

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }
	
	onCreate() : void {
		// Maybe we should pass an observable to the model back, with the BackendModelUUIDResult
		
		console.log( this.dmName  + ";" + this.dmDescription + ";" + this.dmVersion + ";" + this.dmDisplayName )
		
		this.activeModal.close('create');
	}
}
