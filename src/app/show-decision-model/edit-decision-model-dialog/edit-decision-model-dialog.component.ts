import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';



@Component({
  selector: 'app-edit-decision-model-dialog',
  templateUrl: './edit-decision-model-dialog.component.html',
  styleUrls: ['./edit-decision-model-dialog.component.css']
})
export class EditDecisionModelDialogComponent  {

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }

	onUpdate() : void {
		// Maybe we should pass an observable to the model back, with the BackendModelUUIDResult
		
		this.activeModal.close('update');
	}

}
