import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { BackendDecisionModel } from '../backend-services/backend-model/backend-decision-model';
import { BackendDecisionModelDecisionNode } from '../backend-services/backend-model/backend-decision-model-decision-node';
import { BackendDecisionThread } from '../backend-services/backend-model/backend-decision-thread';

// import the backend service, which provides the decision model data
import { DecisionModelBackendService } from '../backend-services/decision-model-backend.service';
import { DecisionThreadBackendService } from '../backend-services/decision-thread-backend.service';
import { KnowledgeBaseBackendService } from '../backend-services/knowledge-base-backend.service';
import { BackendKBArticleIndex } from '../backend-services/backend-model/backend-kb-article-index';
import { BackendKBArticle } from '../backend-services/backend-model/backend-kb-article';

import { BackendDecisionThreadInputUI } from '../backend-services/backend-model/backend-decision-thread-input-ui';
import { BackendDecisionThreadInputUIItem } from '../backend-services/backend-model/backend-decision-thread-input-ui-item';

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
	
    public articleIndex : BackendKBArticleIndex = new BackendKBArticleIndex();
	public articleMap: Map<string,BackendKBArticle> = new Map();
    public currentArticle: BackendKBArticle = new BackendKBArticle();

	// inputUIInterface
    public inputUIInterfaceLength: number = 0;
    public inputUIInterfaceItems: BackendDecisionThreadInputUIItem[] = [];
	public inputUIInterfaceValues: string[] = [];

	constructor( private activatedRoute : ActivatedRoute, private backendModelService: DecisionModelBackendService, private backendThreadService: DecisionThreadBackendService, private articleService:KnowledgeBaseBackendService,  private modalService: NgbModal) { }

	ngOnInit(): void {
		var threaduuid = this.activatedRoute.snapshot.params['uuid'];
		
		this.retrieveThread(threaduuid);
		this.retrieveArticles();
	}
	
    retrieveArticles() : void {
		this.articleService.getKBArticleList().subscribe(
			data => this.onArticleIndexLoaded(data),
			error => this.onArticleIndexFailed(error)
		);
    }

	onArticleIndexLoaded( articleIndex: BackendKBArticleIndex): void {
		this.articleIndex = articleIndex;
		
		var newMap = new Map<string, BackendKBArticle>();
		
		articleIndex.result.forEach( function (article) {
			newMap.set(article.uuid, article);
		});
		
		this.articleMap = newMap;
		this.setCurrentArticle();
	}
	
	retrieveThread(threaduuid: string) : void {
		this.backendThreadService.getDecisionThread(threaduuid).subscribe(
			data => this.onDecisionThreadLoaded(data),
			error => this.onDecisionThreadFailed(error)
		);
		
		this.backendThreadService.getDecisionThreadInputUI(threaduuid).subscribe(
			data => this.onDecisionThreadInputProvided(data),
			error => this.onDecisionThreadInputFailed(error)
		);
	}
	

    onDecisionThreadInputProvided(data: BackendDecisionThreadInputUI): void {
        this.inputUIInterfaceLength = data.uiInputInterface.length;
		this.inputUIInterfaceItems = data.uiInputInterface;
		this.inputUIInterfaceValues = new Array<string>(this.inputUIInterfaceLength).fill("");
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

		this.setCurrentArticle();		
	}
	
    setCurrentArticle() : void {
		if(!this.articleMap) {
			return;
		}
		if(!this.currentNodeData) {
			return;
		}
	
        this.currentArticle = this.articleMap.get(this.currentNodeData.kbarticle);
    }

	commitThreadData() : void {
		let uuid:string  = this.decisionThread.uuid;
		
		let theInput:Map<string,string> = new Map<string,string>();
		for(let i=0;i<this.inputUIInterfaceLength;i++)	{
			theInput.set(this.inputUIInterfaceItems[i].label  ,this.inputUIInterfaceValues[i] );
		}
		
		this.backendThreadService.decideHITNodeOnDecisionThead(uuid, theInput).subscribe(
			data=>{this.retrieveThread(data.uuid);},
			error=>{},
		)
	}
	
	onRetryThread() : void {
		let uuid:string  = this.decisionThread.uuid;
		
		this.backendThreadService.retryDecisionThread(uuid).subscribe(
			data=>{this.retrieveThread(data.uuid)},
			error=>{
				// ignore
			}
		)
	}
	
	onDecisionThreadRetried(thread_uuid) : void {
		this.retrieveThread(this.decisionThread.uuid)
	}
	
    onDecisionThreadFailed(error: any) : void {
        console.log(error);
    }

	onDecisionModelFailed( error:any ) : void {
		console.log(error);
	}
	
	onArticleIndexFailed( error: any) : void {
		console.log(error);
	}

    onDecisionThreadInputFailed(error: any): void {
        console.log(error);
    }


}
