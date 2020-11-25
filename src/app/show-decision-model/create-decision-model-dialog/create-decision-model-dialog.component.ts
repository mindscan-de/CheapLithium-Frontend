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

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }
	

}
