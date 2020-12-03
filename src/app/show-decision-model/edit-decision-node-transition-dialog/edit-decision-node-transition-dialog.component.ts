import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';
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
	

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }
	
	setDialogData( node : BackendDecisionModelDecisionNode, index:number, nodelist:BackendDecisionModelDecisionNode[] ):void {
		
		let transition= node.nextactions[index];
		
		console.log(transition);
		console.log(nodelist);
		
		this.dnState = node;
		this.dntName = transition.name;
		this.dntTemplate = transition.template;
		this.dntNextNode = transition.next;
		this.dntTransitIf = transition.transitif;
		
		// list of follownodes
		this.dntNodeList = nodelist;
		
		// model id
		// node id
		// transition index,
	}

	onUpdate() : void {
		this.activeModal.close('update');
	}


}
