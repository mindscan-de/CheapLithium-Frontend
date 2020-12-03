import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// backend model
import { BackendDecisionModelDecisionNode } from '../../backend-services/backend-model/backend-decision-model-decision-node';

@Component({
  selector: 'app-create-decision-node-transition-dialog',
  templateUrl: './create-decision-node-transition-dialog.component.html',
  styleUrls: ['./create-decision-node-transition-dialog.component.css']
})
export class CreateDecisionNodeTransitionDialogComponent  {
	
	public dntName: string = "";
	public dntTemplate: string = "";
	public dntNextNode: string = ""; 
	public dntTransitIf: string = "";
	public dntNodeList: BackendDecisionModelDecisionNode[] = []; 


	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }

	onCreate() : void {
		
	}
}
