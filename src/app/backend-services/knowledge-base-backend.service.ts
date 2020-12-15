import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';

import { BackendKBArticle } from './backend-model/backend-kb-article';
import { BackendKBArticleIndex } from './backend-model/backend-kb-article-index';
import { BackendModelUUIDResult } from './backend-model/backend-model-uuidresult';

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
	
	createKBArticle(pageTitle:string, pageSummary:string, pageContent:string) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();
		
		formdata.append('pagetitle', pageTitle);
		formdata.append('pagesummary', pageSummary);
		formdata.append('pagecontent', pageContent);
		
		return this.httpClient.post<BackendModelUUIDResult>( this._knowledgebaseInsertLocation, formdata);
	}
	
	updateKBArticle(uuid:string, pageTitle:string, pageSummary:string, pageContent:string ) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData(); 
		
		formdata.append('uuid', uuid);
		formdata.append('pagetitle', pageTitle);
		formdata.append('pagesummary', pageSummary);
		formdata.append('pagecontent', pageContent);

		return this.httpClient.post<BackendModelUUIDResult>( this._knowledgebaseUpdateLocation, formdata);
	}
}
