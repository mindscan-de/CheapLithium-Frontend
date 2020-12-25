import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

// additional components
import {CreateDecisionModelDialogComponent} from './create-decision-model-dialog/create-decision-model-dialog.component';
import {CreateDecisionNodeDialogComponent} from './create-decision-node-dialog/create-decision-node-dialog.component';
import {CreateDecisionNodeTransitionDialogComponent} from './create-decision-node-transition-dialog/create-decision-node-transition-dialog.component';
import {CopyDecisionModelDialogComponent} from './copy-decision-model-dialog/copy-decision-model-dialog.component';
import {EditDecisionModelDialogComponent} from './edit-decision-model-dialog/edit-decision-model-dialog.component';
import {EditDecisionNodeDialogComponent} from './edit-decision-node-dialog/edit-decision-node-dialog.component';
import {EditDecisionNodeTransitionDialogComponent} from './edit-decision-node-transition-dialog/edit-decision-node-transition-dialog.component';


// import the backend service, which provides the decision model data
import { DecisionModelBackendService } from '../backend-services/decision-model-backend.service';
import { KnowledgeBaseBackendService } from '../backend-services/knowledge-base-backend.service';

// TODO: import the m2m transformation for translating the backend model to the ui model

// use the backendmodel
import { BackendDecisionModel } from '../backend-services/backend-model/backend-decision-model';
import { BackendModelUUIDResult } from '../backend-services/backend-model/backend-model-uuidresult';
import { BackendDecisionModelDecisionNode } from '../backend-services/backend-model/backend-decision-model-decision-node';
import { BackendKBArticleIndex } from '../backend-services/backend-model/backend-kb-article-index';

@Component({
  selector: 'app-show-decision-model',
  templateUrl: './show-decision-model.component.html',
  styleUrls: ['./show-decision-model.component.css']
})
export class ShowDecisionModelComponent implements OnInit {
	
	public decisionModel: BackendDecisionModel = new BackendDecisionModel();
	public decisionNodeMap: Map<string,BackendDecisionModelDecisionNode> = new Map();
	public articleIndex : BackendKBArticleIndex = new BackendKBArticleIndex();

	constructor( private activatedRoute : ActivatedRoute, private backendService: DecisionModelBackendService, private articleService: KnowledgeBaseBackendService , private modalService: NgbModal) { }

	ngOnInit(): void {
		var uuid = this.activatedRoute.snapshot.params['uuid'];
		
		this.retrieveModel(uuid);
		
		this.articleService.getKBArticleList().subscribe(
			data => this.onArticleIndexLoaded(data),
			error => this.onArticleIndexFailed(error)
		);
	}
	
	retrieveModel(uuid:string) : void {
		this.backendService.getDecisionModel(uuid).subscribe(
			data => this.onDecisionModelLoaded(data),
			error => this.onDecisionModelFailed(error)
		);
	}
	
	onArticleIndexLoaded( articleIndex: BackendKBArticleIndex): void {
		this.articleIndex = articleIndex;
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
	
	onArticleIndexFailed( error: any) : void {
		console.log(error);
	}
	
	
	onCreateNode(dmuuid:string):void {
		// open a modal dialog to ask, what kind of node, (start, end, hit, mit, imp, invoke)
		// will be attached to current model
		const modalref = this.modalService.open(CreateDecisionNodeDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' })
		
		modalref.componentInstance.setDecisionModelUUID(dmuuid);
		modalref.componentInstance.setArticles(this.articleIndex)
		
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
		const modalref = this.modalService.open(EditDecisionModelDialogComponent,  {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });
		
		modalref.componentInstance.setDialogData(this.decisionModel)

		modalref.result.then((result) => {
			let newDecisionModelData:BackendDecisionModel = result;
			
			this.backendService.updateDecisionModel(
				this.decisionModel.uuid,
				newDecisionModelData.name,
				newDecisionModelData.displayname,
				newDecisionModelData.description, 
				newDecisionModelData.version
			).subscribe(
				data => this.onUUIDResult(data),
				error => this.onDecisionModelFailed(error)
			)
		  
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
		
	}
	
	onClickDecisionNode(modeluuid:string, node:BackendDecisionModelDecisionNode) : void {
		const modalref = this.modalService.open(EditDecisionNodeDialogComponent,  {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });
		
		modalref.componentInstance.setDecisionNodeData(modeluuid, node);

		modalref.result.then((result) => {
			let updatedNode:BackendDecisionModelDecisionNode = result;
			
			this.backendService.updateDecisionNodeForModel(modeluuid, updatedNode.uuid, updatedNode.name, updatedNode.type, updatedNode.kbarticle ).subscribe(
				data => this.onUUIDResult(data),
				error => this.onDecisionModelFailed(error)
			);
			
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	
	onClickDecisionNodeTransition(modeluuid:string, node:BackendDecisionModelDecisionNode, index:number): void {
		const modalref = this.modalService.open(EditDecisionNodeTransitionDialogComponent,  {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });
		
		modalref.componentInstance.setDialogData(
			node, node.nextactions[index], Array.from(this.decisionNodeMap.values()));

		modalref.result.then((result) => {
			
			let updatedTransition = result;
			
			this.backendService.updateDecisionNodeTransition(modeluuid, node.uuid, index, updatedTransition).subscribe(
				data => this.onUUIDResult(data),
				error => this.onDecisionModelFailed(error)
			);
			
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

	onAddDecisionNodeTransition(dmuuid: string, decisionNode:BackendDecisionModelDecisionNode ) : void {
		const modalref = this.modalService.open(CreateDecisionNodeTransitionDialogComponent,  {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' });
		
		modalref.componentInstance.setDialogData(decisionNode, Array.from(this.decisionNodeMap.values()) );

		modalref.result.then((result) => {
			
			let newTransition = result;
			
			this.backendService.insertDecisionNodeTransition(dmuuid,decisionNode.uuid,newTransition).subscribe(
				data => this.onUUIDResult(data),
				error => this.onDecisionModelFailed(error)
			);
			
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	
	onUUIDResult(result:BackendModelUUIDResult) : void {
		console.log(result);
		// TODO:
		// either redirect via parameter or update current model (depends if currentmodel==result.uuid), 
		// but via parameter (activatedroute) is better, because the browsers back button can be used.
		this.retrieveModel(result.uuid);
	}
	
	onError(error):void {
		console.log(error)
	}
	
}
