import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import the backend service.
import { KnowledgeBaseBackendService } from '../backend-services/knowledge-base-backend.service';

// import dialogs.
import { CreateKBArticleDialogComponent } from "./create-kbarticle-dialog/create-kbarticle-dialog.component";

// import the backend model data types
import { BackendKBArticle } from '../backend-services/backend-model/backend-kb-article';
import { BackendModelUUIDResult } from '../backend-services/backend-model/backend-model-uuidresult';

@Component({
  selector: 'app-show-kb-article',
  templateUrl: './show-kb-article.component.html',
  styleUrls: ['./show-kb-article.component.css']
})
export class ShowKBArticleComponent implements OnInit {
	
	public article:BackendKBArticle = new BackendKBArticle();

	constructor(private activatedRoute : ActivatedRoute, private backendService: KnowledgeBaseBackendService, private modalService: NgbModal, private router : Router) { }

	ngOnInit(): void {
		var uuid = this.activatedRoute.snapshot.params['uuid'];
		
		this.retrieveArticle(uuid);
	}
	
	
    retrieveArticle(uuid: any) {
        this.backendService.getKBArticle(uuid).subscribe(
			data => this.onArticleLoaded(data),
			error => this.onArticleFailed(error)
		);
    }

    onArticleLoaded(article: BackendKBArticle): void {
        this.article = article;
    }

    onArticleFailed(error: any): void {
        console.log(error);
    }

	onCreateArticle() : void {
		// This will create a new article and the user shoud then be redirectedto the new article,
		// the dialog will create it and then return a new uuid
		// then the angular router will redirect the user to the new url with the new uuid
		const modalref = this.modalService.open(CreateKBArticleDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' })
		
		modalref.result.then((result) => {
			result.subscribe(
				data => this.onUUIDResult(data),
				error => this.onError(error)
			)
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
	
	onEditArticle() : void {
		// this will open a dialog for editing an article, the user is then redicted to the same 
		// article again / reload the content using the retrieveArticle method. 
	}


	onUUIDResult(result:BackendModelUUIDResult) : void {
		this.router.navigate(['/showArticle', {uuid:result.uuid}]);
	}


	onError(error):void {
		console.log(error)
	}

}
