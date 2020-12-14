import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';

import { BackendKBArticle } from './backend-model/backend-kb-article';
import { BackendKBArticleIndex } from './backend-model/backend-kb-article-index';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeBaseBackendService {
	
	private _knowledgebaseArticleLocation      = '/CheapLithium/rest/getKBArticle/';
	private _knowledgebaseArticleListLocation  = '/CheapLithium/rest/getKBArticlesList';
	
	private _knowledgebaseInsertLocation       = '/CheapLithium/rest/insertKBArticle';
	private _knowledgebaseUpdateLocation       = '/CheapLithium/rest/updateKBArticle';

	constructor( private httpClient : HttpClient ) { }

	getKBArticle(uuid:string) : Observable<BackendKBArticle> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendKBArticle>(this._knowledgebaseArticleLocation + uuid, {params:httpParameters});
	}
	
	getKBArticleList() : Observable<BackendKBArticleIndex> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendKBArticleIndex>( this._knowledgebaseArticleListLocation, {params:httpParameters})
	}
}
