import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { KnowledgeBaseBackendService } from '../backend-services/knowledge-base-backend.service';
import { BackendKBArticle } from '../backend-services/backend-model/backend-kb-article';
import { BackendKBArticleIndex } from '../backend-services/backend-model/backend-kb-article-index';

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

}
