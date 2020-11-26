import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';


@Component({
  selector: 'app-copy-decision-model-dialog',
  templateUrl: './copy-decision-model-dialog.component.html',
  styleUrls: ['./copy-decision-model-dialog.component.css']
})
export class CopyDecisionModelDialogComponent {

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }

	onCopy() : void {
		// Maybe we should pass an observable to the model back, with the BackendModelUUIDResult
		
		this.activeModal.close('create');
	}
}
