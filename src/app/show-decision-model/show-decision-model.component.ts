import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// additional components
import {CreateDecisionModelDialogComponent} from './create-decision-model-dialog/create-decision-model-dialog.component';
import {CreateDecisionNodeDialogComponent} from './create-decision-node-dialog/create-decision-node-dialog.component';
import {CopyDecisionModelDialogComponent} from './copy-decision-model-dialog/copy-decision-model-dialog.component';
import {EditDecisionModelDialogComponent} from './edit-decision-model-dialog/edit-decision-model-dialog.component';
import {EditDecisionNodeDialogComponent} from './edit-decision-node-dialog/edit-decision-node-dialog.component';
import {EditDecisionNodeTransitionDialogComponent} from './edit-decision-node-transition-dialog/edit-decision-node-transition-dialog.component';


// import the backend service, which provides the decision model data
import { DecisionModelBackendService } from '../backend-services/decision-model-backend.service';

// import the m2m transformation for translating the backend model to the ui model

// use the backendmodel
import { BackendDecisionModel } from '../backend-services/backend-model/backend-decision-model';
import { BackendModelUUIDResult } from '../backend-services/backend-model/backend-model-uuidresult';
import { BackendDecisionModelDecisionNode } from '../backend-services/backend-model/backend-decision-model-decision-node';

@Component({
  selector: 'app-show-decision-model',
  templateUrl: './show-decision-model.component.html',
  styleUrls: ['./show-decision-model.component.css']
})
export class ShowDecisionModelComponent implements OnInit {
	
	public decisionModel: BackendDecisionModel = new BackendDecisionModel();
	public decisionNodeMap: Map<string,BackendDecisionModelDecisionNode> = new Map();

	constructor( private activatedRoute : ActivatedRoute, private backendService: DecisionModelBackendService, private modalService: NgbModal) { }

	ngOnInit(): void {
		var uuid = this.activatedRoute.snapshot.params['uuid'];
		
		this.retrieveModel(uuid);
	}
	
	retrieveModel(uuid:string) : void {
		this.backendService.getDecisionModel(uuid).subscribe(
			data => this.onDecisionModelLoaded(data),
			error => this.onDecisionModelFailed(error)
		);
	}
	
	onDecisionModelLoaded( model:BackendDecisionModel ): void {
		var newMap = new Map<string, BackendDecisionModelDecisionNode>();
		
		model.nodes.forEach( function (node) {
			newMap.set(node.uuid, node);
		});
		
		this.decisionNodeMap = newMap;
		this.decisionModel = model;
	}
	
	onDecisionModelFailed( error:any ) : void {
		console.log(error);
	}
	
	
	onCreateNode(dmuuid:string):void {
		// open a modal dialog to ask, what kind of node, (start, end, hit, mit, imp, invoke)
		// will be attached to current model
		const modalref = this.modalService.open(CreateDecisionNodeDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' })
		
		modalref.componentInstance.setDecisionModelUUID(dmuuid);
		
		modalref.result.then((result) => {
			result.subscribe(
				data => this.onUUIDResult(data),
				error => this.onError(error)
			)
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	// maybe this model create function will be transferred	
	onCreateModel():void {
		const modalref = this.modalService.open(CreateDecisionModelDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' })
		
		modalref.result.then((result) => {
			result.subscribe(
				data => this.onUUIDResult(data),
				error => this.onError(error)
			)
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	
	onCopyModel():void {
		// will ask for new version number or different name, and allow to define new description, displayname
		// then reads new uuid
		// then redirects to new model
		const modalref = this.modalService.open(CopyDecisionModelDialogComponent,  {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });

		modalref.result.then((result) => {
		  // this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	
	onEditModel():void {
		// will allow to edit the Decision Model
		// name, displayname, Description, Version
		const modalref = this.modalService.open(EditDecisionModelDialogComponent,  {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });

		modalref.result.then((result) => {
		  // this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
		
	}
	
	onClickDecisionNode(uuid:string) : void {
		const modalref = this.modalService.open(EditDecisionNodeDialogComponent,  {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });

		modalref.result.then((result) => {
		  // this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	
	onClickDecisionNodeTransition(modeluuid:string, node:BackendDecisionModelDecisionNode, index:number): void {
		const modalref = this.modalService.open(EditDecisionNodeTransitionDialogComponent,  {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });
		
		modalref.componentInstance.setDialogData(
			node,index, Array.from(this.decisionNodeMap.values()));

		modalref.result.then((result) => {
		  // this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	
	onPersistModel(uuid:string) : void {
		this.backendService.persistDecisionModel(uuid).subscribe(
			data => this.onUUIDResult(data),
			error => this.onDecisionModelFailed(error)			
		);
	}
	
	onAddDecisionNodeTransition(dmuuid: string, decisionNode ) : void {
		
	}
	
	onUUIDResult(result:BackendModelUUIDResult) : void {
		console.log(result);
		// either redirect via parameter or update current model, but via parameter (activatedroute) is better, because the browsers back button can be used.
		this.retrieveModel(result.uuid);
	}
	
	onError(error):void {
		console.log(error)
	}
	
	/* onDeleteNode(uuid:string) : void {
		// in the service the node must be deleted
		// in the service the incomming transitions to the node must be deleted
	} */
	

}
