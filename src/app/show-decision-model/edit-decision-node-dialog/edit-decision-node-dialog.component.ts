import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendKBArticle } from '../../backend-services/backend-model/backend-kb-article';
import { BackendKBArticleIndex } from '../../backend-services/backend-model/backend-kb-article-index';
import { BackendDecisionModelDecisionNode } from '../../backend-services/backend-model/backend-decision-model-decision-node';


@Component({
  selector: 'app-edit-decision-node-dialog',
  templateUrl: './edit-decision-node-dialog.component.html',
  styleUrls: ['./edit-decision-node-dialog.component.css']
})
export class EditDecisionNodeDialogComponent  {
	
	public dmUuid: string = "";
	public decisionNode: BackendDecisionModelDecisionNode = new BackendDecisionModelDecisionNode();
	
	public dnName: string = "";
	public dnType: string = "";
	public dnKBArticle: string = "";
	public articles: BackendKBArticle[] = [];

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }
	
	setDecisionNodeData(dmuuid: string, decisionNode: BackendDecisionModelDecisionNode) : void {
		this.dmUuid = dmuuid;
		this.decisionNode = decisionNode;
		
		this.dnName = decisionNode.name;
		this.dnType = decisionNode.type;
		this.dnKBArticle = decisionNode.kbarticle;
	}
	
	
	setArticles(articleIndex: BackendKBArticleIndex): void {
		this.articles = articleIndex.result;
	}
	
	
	onUpdate() : void {
		let updatedNode = new BackendDecisionModelDecisionNode();
		
		updatedNode.uuid = this.decisionNode.uuid;
		updatedNode.name = this.dnName;
		updatedNode.type = this.dnType;
		updatedNode.kbarticle = this.dnKBArticle;
		
		this.activeModal.close(updatedNode);
	}

}
