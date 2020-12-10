import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import the dialogs used in this component
import { StartDecisionModelDialogComponent } from './start-decision-model-dialog/start-decision-model-dialog.component';

// import the backend service, which provides the decision model data
import { DecisionModelBackendService } from '../backend-services/decision-model-backend.service';
import { BackendDecisionModel } from '../backend-services/backend-model/backend-decision-model';
import { BackendDecisionModelIndex } from '../backend-services/backend-model/backend-decision-model-index';
import { BackendThreadUUIDResult } from '../backend-services/backend-model/backend-thread-uuidresult'; 


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

	public decisionModelIndex: BackendDecisionModelIndex = new BackendDecisionModelIndex();

	constructor( private activatedRoute : ActivatedRoute, private backendService: DecisionModelBackendService, private modalService: NgbModal) { }

	ngOnInit(): void {
		this.backendService.getDecisionModelIndex().subscribe(
			data => this.onDecisionModelIndexLoaded(data),
			error => this.onDecisionModelIndexFailed(error)
		);
	}
	
	onDecisionModelIndexLoaded(index:BackendDecisionModelIndex) : void {
		this.decisionModelIndex = index;
	}

	onDecisionModelIndexFailed(message) : void {
		console.log(message);
	}

	onClickDecisionModelExecute(decisionModel:BackendDecisionModel) : void {
		const modalref = this.modalService.open(StartDecisionModelDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });
		
		modalref.componentInstance.setDialogData(decisionModel)
		
		modalref.result.then(
			(result)=>{
				let threaduuid: BackendThreadUUIDResult = result;
				
				// TODO: redirect to thread via activatedRoute?
			},
			(reason)=>{}
		);
	}

}
