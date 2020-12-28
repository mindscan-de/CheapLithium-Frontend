import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend model
import { BackendDecisionModelDecisionNode } from '../../backend-services/backend-model/backend-decision-model-decision-node';
import { BackendDecisionModelDecisionNodeOutcome } from '../../backend-services/backend-model/backend-decision-model-decision-node-outcome';

@Component({
  selector: 'app-create-decision-node-transition-dialog',
  templateUrl: './create-decision-node-transition-dialog.component.html',
  styleUrls: ['./create-decision-node-transition-dialog.component.css']
})
export class CreateDecisionNodeTransitionDialogComponent  {
	
	public dnState: BackendDecisionModelDecisionNode = new BackendDecisionModelDecisionNode();
	public dntName: string = "";
	public dntTemplate: string = "";
	public dntNextNode: string = ""; 
	public dntGuard: string = "";
	public dntNodeList: BackendDecisionModelDecisionNode[] = []; 

	constructor(public activeModal: NgbActiveModal) { }

	
	setDialogData( node : BackendDecisionModelDecisionNode, nodelist:BackendDecisionModelDecisionNode[] ):void {
		this.dnState = node;
		this.dntNodeList = nodelist;
	}
	

	onCreate() : void {
		let updatedTransition = new BackendDecisionModelDecisionNodeOutcome();
		
		updatedTransition.name = this.dntName;
		updatedTransition.next = this.dntNextNode;
		updatedTransition.template = this.dntTemplate;
		updatedTransition.guard = this.dntGuard;
		
		this.activeModal.close( updatedTransition );
	}
}
