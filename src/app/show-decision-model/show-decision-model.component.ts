import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import the backend serice, which provides the decision model data
import { DecisionModelBackendService } from '../backend-services/decision-model-backend.service';

// import the m2m transformation for translating the backend model to the ui model

// use the backendmodel
import { BackendDecisionModel } from '../backend-services/backend-model/backend-decision-model';

@Component({
  selector: 'app-show-decision-model',
  templateUrl: './show-decision-model.component.html',
  styleUrls: ['./show-decision-model.component.css']
})
export class ShowDecisionModelComponent implements OnInit {
	
	public decisionModel: BackendDecisionModel;

	constructor( private activatedRoute : ActivatedRoute, private backendService: DecisionModelBackendService) { }

	ngOnInit(): void {
		// @TODO: read uuid from url as parameter
		
		this.backendService.getDecisionModel("0518f24f-41a0-4f13-b5f6-94a015b5b04c").subscribe(
			data => this.onDecisionModelLoaded(data),
			error => this.onDecisionModelFailed(error)
		);
	}
	
	onDecisionModelLoaded( model:BackendDecisionModel ): void {
		this.decisionModel = model;
	}
	
	onDecisionModelFailed( error:any ) : void {
		console.log(error);
	}
	
	
	onCreateNode():void {
		// open a modal dialog to ask, what kind of node, (start, end, hit, mit, imp, invoke)
		// will be attached to current model
	}

	// maybe this model create function will be transferred	
	onCreateModel():void {
		// open a modal dialog to ask for model parameters
		// then reads new uuid
		// then redirects to new model
	}
	
	onCopyModel():void {
		// will ask for new version number or different name, and allow to define new description, displayname
		// then reads new uuid
		// then redirects to new model
	}
	
	onEditModel():void {
		// will allow to edit the Decision Model
		// name, displayname, Description, Version
	}
	

}
