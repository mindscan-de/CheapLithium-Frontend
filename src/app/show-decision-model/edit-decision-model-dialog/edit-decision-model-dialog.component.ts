import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Backend Model
// TODO: add the Model component 
import {BackendDecisionModel} from '../../backend-services/backend-model/backend-decision-model';


@Component({
  selector: 'app-edit-decision-model-dialog',
  templateUrl: './edit-decision-model-dialog.component.html',
  styleUrls: ['./edit-decision-model-dialog.component.css']
})
export class EditDecisionModelDialogComponent  {

	
	public dmName: string = "";
	public dmDescription: string = "";
	public dmVersion: string = "";
	public dmDisplayName: string = "";
	

	constructor(public activeModal: NgbActiveModal ) { }

	setDialogData( decisionModel:BackendDecisionModel ) : void {
		this.dmName = decisionModel.name;
		this.dmDisplayName = decisionModel.displayname;
		this.dmVersion = decisionModel.version;
		this.dmDescription = decisionModel.description;
	}

	onUpdate() : void {
		let newDecisionModelValues:BackendDecisionModel = new BackendDecisionModel(); 
		
		newDecisionModelValues.description = this.dmDescription;
		newDecisionModelValues.displayname = this.dmDisplayName;
		newDecisionModelValues.name = this.dmName;
		newDecisionModelValues.version = this.dmVersion;
		
		this.activeModal.close(newDecisionModelValues);
	}

}
