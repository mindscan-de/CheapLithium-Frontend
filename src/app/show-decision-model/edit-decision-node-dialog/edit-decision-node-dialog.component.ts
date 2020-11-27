import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';


@Component({
  selector: 'app-edit-decision-node-dialog',
  templateUrl: './edit-decision-node-dialog.component.html',
  styleUrls: ['./edit-decision-node-dialog.component.css']
})
export class EditDecisionNodeDialogComponent  {

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }
	
	onUpdate() : void {
		
		this.activeModal.close('update');
	}

}
