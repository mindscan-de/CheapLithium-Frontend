import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { BackendDecisionModel } from '../backend-services/backend-model/backend-decision-model';
import { BackendDecisionModelDecisionNode } from '../backend-services/backend-model/backend-decision-model-decision-node';
import { BackendDecisionThread } from '../backend-services/backend-model/backend-decision-thread';

// import the backend service, which provides the decision model data
import { DecisionModelBackendService } from '../backend-services/decision-model-backend.service';
import { DecisionThreadBackendService } from '../backend-services/decision-thread-backend.service';

@Component({
  selector: 'app-show-decision-thread',
  templateUrl: './show-decision-thread.component.html',
  styleUrls: ['./show-decision-thread.component.css']
})
export class ShowDecisionThreadComponent implements OnInit {
	
	public decisionThread: BackendDecisionThread = new BackendDecisionThread();
	public decisionThreadTmp: BackendDecisionThread; 
	public decisionModel: BackendDecisionModel = new BackendDecisionModel();
	public decisionNodeMap: Map<string,BackendDecisionModelDecisionNode> = new Map(); 
	public currentNodeData: BackendDecisionModelDecisionNode = new BackendDecisionModelDecisionNode(); 

	constructor( private activatedRoute : ActivatedRoute, private backendModelService: DecisionModelBackendService, private backendThreadService: DecisionThreadBackendService,  private modalService: NgbModal) { }

	ngOnInit(): void {
		var threaduuid = this.activatedRoute.snapshot.params['uuid'];
		
		this.retrieveThread(threaduuid);
	}
	
	retrieveThread(threaduuid: string) : void {
		this.backendThreadService.getDecisionThread(threaduuid).subscribe(
			data => this.onDecisionThreadLoaded(data),
			error => this.onDecisionThreadFailed(error)
		);
	}
	
    onDecisionThreadLoaded(thread: BackendDecisionThread) : void {
		console.log(thread);
		this.backendModelService.getDecisionModel(thread.currentmodel).subscribe(
			data => this.onDecisionModelLoaded(data),
			error => this.onDecisionModelFailed(error)
		);

		// TODO read the runtime data(runtume environment) / subscribe to the runtime data
		
		this.decisionThreadTmp = thread;
    }

	onDecisionModelLoaded( model:BackendDecisionModel ): void {
		var newMap = new Map<string, BackendDecisionModelDecisionNode>();
		
		model.nodes.forEach( function (node) {
			newMap.set(node.uuid, node);
		});
		
		this.decisionNodeMap = newMap;
		this.decisionModel = model;
		this.decisionThread = this.decisionThreadTmp;
		this.currentNodeData = newMap.get(this.decisionThread.currentnode);
	}

	
    onDecisionThreadFailed(error: any) : void {
        console.log(error);
    }

	onDecisionModelFailed( error:any ) : void {
		console.log(error);
	}


}
