import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

// backend Service
import { DecisionModelBackendService } from '../../backend-services/decision-model-backend.service';

// Backend Model
import { BackendKBArticle } from '../../backend-services/backend-model/backend-kb-article';
import { BackendKBArticleIndex } from '../../backend-services/backend-model/backend-kb-article-index';
import { BackendModelUUIDResult } from '../../backend-services/backend-model/backend-model-uuidresult';


@Component({
  selector: 'app-create-decision-node-dialog',
  templateUrl: './create-decision-node-dialog.component.html',
  styleUrls: ['./create-decision-node-dialog.component.css']
})
export class CreateDecisionNodeDialogComponent  {
	
	public dmuuid: string = "";
	public dnName: string = "";
	public dnType: string = "hit";
	public dnKBArticle: string = "";
	public articles: BackendKBArticle[] = [];

	constructor(public activeModal: NgbActiveModal, private backendService : DecisionModelBackendService) { }
	
	setDecisionModelUUID(dmuuid : string) : void {
		this.dmuuid = dmuuid;
	}
	
	setArticles(articleIndex: BackendKBArticleIndex): void {
		this.articles = articleIndex.result;
	}

	onCreate() : void {
		let observeable:Observable<BackendModelUUIDResult> = this.backendService.createDecisionNodeForModel(this.dnName, this.dnType, this.dnKBArticle, this.dmuuid) 
		
		this.activeModal.close(observeable);
	}

}
