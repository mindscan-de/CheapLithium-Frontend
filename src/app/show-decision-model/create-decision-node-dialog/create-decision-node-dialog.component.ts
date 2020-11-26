import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';


@Component({
  selector: 'app-create-decision-node-dialog',
  templateUrl: './create-decision-node-dialog.component.html',
  styleUrls: ['./create-decision-node-dialog.component.css']
})
export class CreateDecisionNodeDialogComponent  {

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }

	onCreate() : void {
		// Maybe we should pass an observable to the model back, with the BackendModelUUIDResult
		
		this.activeModal.close('create');
	}

}
