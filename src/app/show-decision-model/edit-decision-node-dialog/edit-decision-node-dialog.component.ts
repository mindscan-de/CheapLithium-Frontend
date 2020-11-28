import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';
import { BackendDecisionModelDecisionNode } from '../../backend-services/backend-model/backend-decision-model-decision-node';


@Component({
  selector: 'app-edit-decision-node-dialog',
  templateUrl: './edit-decision-node-dialog.component.html',
  styleUrls: ['./edit-decision-node-dialog.component.css']
})
export class EditDecisionNodeDialogComponent  {
	
	public dmUuid: string = "";
	public decisionNode: BackendDecisionModelDecisionNode = new BackendDecisionModelDecisionNode();

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }
	
	setDecisionNodeData(dmuuid: string, decisionNode: BackendDecisionModelDecisionNode) : void {
		this.dmUuid = dmuuid;
		this.decisionNode = decisionNode;
	}
	
	onDeleteTransition( index:number ) : void {
		// this.backendService.removeDecisionNodeTransition();
		// then if successful, then adapt local list in decision node
	}
	
	onCreateTransition() : void {
		// maybe not yet...
		// will not be implemented here now...
		// open another modal dialog?
	}
	
	onUpdate() : void {
		// go back to model uuid
		this.activeModal.close('update');
	}

}
