import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import the dialogs used in this component
import { StartDecisionModelDialogComponent } from './start-decision-model-dialog/start-decision-model-dialog.component';
import { CreateDecisionModelDialogComponent } from '../show-decision-model/create-decision-model-dialog/create-decision-model-dialog.component';

// import the backend service, which provides the decision model data
import { DecisionModelBackendService } from '../backend-services/decision-model-backend.service';
import { BackendDecisionModel } from '../backend-services/backend-model/backend-decision-model';
import { BackendDecisionModelIndex } from '../backend-services/backend-model/backend-decision-model-index';
import { BackendThreadUUIDResult } from '../backend-services/backend-model/backend-thread-uuidresult'; 
import { BackendModelUUIDResult } from '../backend-services/backend-model/backend-model-uuidresult';


@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

	public decisionModelIndex: BackendDecisionModelIndex = new BackendDecisionModelIndex();

	constructor( private activatedRoute : ActivatedRoute, private backendService: DecisionModelBackendService, private modalService: NgbModal, private router : Router) { }

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
				
				// redirect to threads ...
				this.router.navigate(['/threads']);
				
				// TODO: redirect to created thread - if well implemented
				// this.router.navigate(['/showDecisionThread', {uuid:threaduuid.uuid}])
			},
			(reason)=>{}
		);
	}
	
	onCreateModel():void {
		const modalref = this.modalService.open(CreateDecisionModelDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' })
		
		modalref.result.then((result) => {
			result.subscribe(
				data => this.onCreatedUUIDResult(data),
				error => this.onError(error)
			)
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	
	onCreatedUUIDResult(result:BackendModelUUIDResult) : void {
		console.log(result);

		this.router.navigateByUrl("/showDecisionModel/"+result.uuid);
	}


	onError(error:any):void {
		console.log(error)
	}
	

}
