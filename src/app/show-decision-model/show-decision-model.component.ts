import { Component, OnInit } from '@angular/core';

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

	constructor( private backendService: DecisionModelBackendService) { }

	ngOnInit(): void {
		this.backendService.getDecisionModel("0518f24f-41a0-4f13-b5f6-94a015b5b04c").subscribe(
			data => this.onDecisionModelLoaded(data),
			error => this.onDecisionModelFailed(error)
		);
	}
	
	onDecisionModelLoaded( model:BackendDecisionModel ): void {
		this.decisionModel = model;
	}
	
	onDecisionModelFailed(error) : void {
		console.log(error);
	}

}
