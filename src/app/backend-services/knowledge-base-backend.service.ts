import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BackendKBArticle } from './backend-model/backend-kb-article';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeBaseBackendService {

	constructor() { }

	retrieveKBArticle(uuid:string) : Observable<BackendKBArticle> {
		
		let article: BackendKBArticle = new BackendKBArticle();
		
		return Observable.create(  function(observer) { observer.next(article); observer.complete();} );
	}
}
