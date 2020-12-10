import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BackendDecisionModel } from '../../backend-services/backend-model/backend-decision-model';
import { BackendThreadUUIDResult } from '../../backend-services/backend-model/backend-thread-uuidresult';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';
import { DecisionThreadBackendService } from '../../backend-services/decision-thread-backend.service';


@Component({
  selector: 'app-start-decision-model-dialog',
  templateUrl: './start-decision-model-dialog.component.html',
  styleUrls: ['./start-decision-model-dialog.component.css']
})
export class StartDecisionModelDialogComponent  {
	
    public decisionModel: BackendDecisionModel = new BackendDecisionModel();
	public ticketReference : string = ""; 

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionThreadBackendService) { }
	
	setDialogData(decisionModel:BackendDecisionModel) : void {
		this.decisionModel = decisionModel;
	}

	onRun() : void {
		// this dialog should run the model and let
		this.backendService.startDecisionThread( this.decisionModel.uuid, this.ticketReference).subscribe(
			data => this.onUUIDResult(data),
			error => this.onError(error)
		)
	}
	
	
	onUUIDResult(threadUUIDResult:BackendThreadUUIDResult):void {
		// TODO: if success cool, and leave dialog)
		// TODO: id nonsuccessfull uuid, then do something impressing
		
		this.activeModal.close(threadUUIDResult);
	}
	
	onError(error:any) : void {
		console.log(error);
	}
}
