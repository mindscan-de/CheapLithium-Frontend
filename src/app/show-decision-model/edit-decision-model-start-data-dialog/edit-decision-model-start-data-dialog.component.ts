import { Component} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BackendDecisionModel } from '../../backend-services/backend-model/backend-decision-model';
import { BackendDecisionModelDecisionNode } from '../../backend-services/backend-model/backend-decision-model-decision-node';

@Component({
  selector: 'app-edit-decision-model-start-data-dialog',
  templateUrl: './edit-decision-model-start-data-dialog.component.html',
  styleUrls: ['./edit-decision-model-start-data-dialog.component.css']
})
export class EditDecisionModelStartDataDialogComponent {
	
	public dmName: string = "";
	public dmDescription: string = "";
	public dmVersion: string = "";
	public dmDisplayName: string = "";

	public dmStartNode: string = "";
	public dmStartConfiguration: string = "";
	
	public dmNodeList: BackendDecisionModelDecisionNode[] = [];

	constructor(public activeModal: NgbActiveModal ) { }

	setDialogData( decisionModel:BackendDecisionModel, nodelist:BackendDecisionModelDecisionNode[] ) : void {
		this.dmName = decisionModel.name;
		this.dmDisplayName = decisionModel.displayname;
		this.dmVersion = decisionModel.version;
		this.dmDescription = decisionModel.description;

		this.dmStartNode = decisionModel.startnode;
		this.dmStartConfiguration = decisionModel.startenvironment;
		
		// TODO: should only contain start nodes / maybe should be filtered before
		this.dmNodeList = nodelist;
	}
	
	onUpdate() : void {
		let newDecisionModelValues:BackendDecisionModel = new BackendDecisionModel();
		
		newDecisionModelValues.startnode = this.dmStartNode;
		newDecisionModelValues.startenvironment = this.dmStartConfiguration;
		
		this.activeModal.close(newDecisionModelValues);
	}
}
