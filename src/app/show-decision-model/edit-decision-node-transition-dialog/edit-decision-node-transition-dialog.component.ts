import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Backend Model
import { BackendDecisionModelDecisionNodeOutcome } from '../../backend-services/backend-model/backend-decision-model-decision-node-outcome';
import { BackendDecisionModelDecisionNode } from '../../backend-services/backend-model/backend-decision-model-decision-node';


@Component({
  selector: 'app-edit-decision-node-transition-dialog',
  templateUrl: './edit-decision-node-transition-dialog.component.html',
  styleUrls: ['./edit-decision-node-transition-dialog.component.css']
})
export class EditDecisionNodeTransitionDialogComponent  {
	
	public dnState: BackendDecisionModelDecisionNode = new BackendDecisionModelDecisionNode();
	public dntName: string = "";
	public dntTemplate: string = "";
	public dntNextNode: string = ""; 
	public dntTransitIf: string = "";
	public dntNodeList: BackendDecisionModelDecisionNode[] = []; 
	
	constructor(public activeModal: NgbActiveModal) { }
	
	setDialogData( node : BackendDecisionModelDecisionNode, transition:BackendDecisionModelDecisionNodeOutcome, nodelist:BackendDecisionModelDecisionNode[] ):void {
		this.dnState = node;
		this.dntNodeList = nodelist;
		this.dntName = transition.name;
		this.dntTemplate = transition.template;
		this.dntNextNode = transition.next;
		this.dntTransitIf = transition.transitif;
	}

	onUpdate() : void {
		let updatedTransition = new BackendDecisionModelDecisionNodeOutcome();
		
		updatedTransition.name = this.dntName;
		updatedTransition.next = this.dntNextNode;
		updatedTransition.template = this.dntTemplate;
		updatedTransition.transitif = this.dntTransitIf;
		
		this.activeModal.close( updatedTransition );
	}

}
