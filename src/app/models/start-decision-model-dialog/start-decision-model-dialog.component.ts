import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';


@Component({
  selector: 'app-start-decision-model-dialog',
  templateUrl: './start-decision-model-dialog.component.html',
  styleUrls: ['./start-decision-model-dialog.component.css']
})
export class StartDecisionModelDialogComponent  {

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }

	onRun() : void {
		// this dialog should run the model and let 
		
		this.activeModal.close('run');
	}
}
