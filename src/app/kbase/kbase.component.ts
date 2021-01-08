import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import the backend service.
import { KnowledgeBaseBackendService } from '../backend-services/knowledge-base-backend.service';

// import dialogs.
import { CreateKBArticleDialogComponent } from '../show-kb-article/create-kbarticle-dialog/create-kbarticle-dialog.component';

// import backend types
import { BackendKBArticle } from '../backend-services/backend-model/backend-kb-article';
import { BackendKBArticleIndex } from '../backend-services/backend-model/backend-kb-article-index';
import { BackendModelUUIDResult } from '../backend-services/backend-model/backend-model-uuidresult';

@Component({
  selector: 'app-kbase',
  templateUrl: './kbase.component.html',
  styleUrls: ['./kbase.component.css']
})
export class KbaseComponent implements OnInit {
	
	public kbarticleIndex: BackendKBArticleIndex = new BackendKBArticleIndex(); 

	constructor(private activatedRoute : ActivatedRoute, private backendService: KnowledgeBaseBackendService, private modalService: NgbModal, private router : Router) { }

	ngOnInit(): void {
		this.backendService.getKBArticleList().subscribe(
			data => this.onKnowledgebaseLoaded(data),
			error => this.onKnowledgebaseFailed(error)
		);
	}
    onKnowledgebaseFailed(message: any): void {
        console.log(message);
    }

    onKnowledgebaseLoaded(index: BackendKBArticleIndex): void {
		this.kbarticleIndex = index
    }

	onCreateArticle() : void {
		// This will create a new article and the user shoud then be redirectedto the new article,
		// the dialog will create it and then return a new uuid
		// then the angular router will redirect the user to the new url with the new uuid
		const modalref = this.modalService.open(CreateKBArticleDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl' })
		
		modalref.result.then((result) => {
			result.subscribe(
				data => this.onCreateUUIDResult(data),
				error => this.onError(error)
			)
		}, (reason) => {
		  // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	// we should have a BackendUUID Result
	onCreateUUIDResult(result:BackendModelUUIDResult) : void {
		this.router.navigateByUrl('/showArticle/'+result.uuid);
	}

	onError(error):void {
		console.log(error)
	}


}
