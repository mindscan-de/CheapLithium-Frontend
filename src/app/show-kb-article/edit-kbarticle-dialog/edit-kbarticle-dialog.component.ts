import { Component} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { BackendKBArticle } from '../../backend-services/backend-model/backend-kb-article';

@Component({
  selector: 'app-edit-kbarticle-dialog',
  templateUrl: './edit-kbarticle-dialog.component.html',
  styleUrls: ['./edit-kbarticle-dialog.component.css']
})
export class EditKBArticleDialogComponent{
	
	public kbaPageTitle : string = "";
	public kbaPageSummary : string = "";
	public kbaPageContent : string = "";
	public kbaRevision  : number = 0;

	constructor( public activeModal: NgbActiveModal ) { }

	setDialogData( kbArticle : BackendKBArticle) : void {
		this.kbaPageContent = kbArticle.pagecontent;
		this.kbaPageSummary = kbArticle.pagesummary;
		this.kbaPageTitle = kbArticle.pagetitle;
		this.kbaRevision = kbArticle.revision;
	}
	
	onUpdate(): void {
		let newkbArticleContent: BackendKBArticle = new BackendKBArticle();
		
		newkbArticleContent.pagecontent = this.kbaPageContent;
		newkbArticleContent.pagesummary = this.kbaPageSummary;
		newkbArticleContent.pagetitle = this.kbaPageTitle;
		
		this.activeModal.close(newkbArticleContent);
	}
}
