import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';


@Component({
  selector: 'app-create-decision-node-dialog',
  templateUrl: './create-decision-node-dialog.component.html',
  styleUrls: ['./create-decision-node-dialog.component.css']
})
export class CreateDecisionNodeDialogComponent  {
	
	public dmuuid: string = "";
	public dnName: string = "";
	public dnType: string = "hit";
	public dnKBArticle: string = "";

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }
	
	setDecisionModelUUID(dmuuid : string) : void {
		this.dmuuid = dmuuid;
	}

	onCreate() : void {
		var observeable = this.backendService.createDecisionNodeForModel(this.dnName, this.dnType, this.dnKBArticle, this.dmuuid) 
		
		this.activeModal.close(observeable);
	}

}
