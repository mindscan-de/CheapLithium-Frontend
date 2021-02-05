import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { BackendDecisionThread } from './backend-model/backend-decision-thread';
import { BackendDecisionThreadIndex } from './backend-model/backend-decision-thread-index';
import { BackendThreadUUIDResult } from './backend-model/backend-thread-uuidresult';
import { BackendDecisionThreadReport } from './backend-model/backend-decision-thread-report';
import { BackendDecisionThreadError } from './backend-model/backend-decision-thread-error';
import { BackendDecisionThreadInputUI } from './backend-model/backend-decision-thread-input-ui';

@Injectable({
  providedIn: 'root'
})
export class DecisionThreadBackendService {
	
	private _decisionThreadLocation          = '/CheapLithium/rest/getDecisionThread/';
	private _decisionThreadListLocation      = '/CheapLithium/rest/getDecisionThreadList';
	private _decisionThreadStartLocation     = '/CheapLithium/rest/startDecisionThread';
	private _decisionThreadRetryLocation     = '/CheapLithium/rest/retryDecisionThread';
	private _decisionThreadReportLocation    = '/CheapLithium/rest/getDecisionThreadReport/';
	private _decisionThreadErrorsLocation    = '/CheapLithium/rest/getDecisionThreadErrors/';
	private _decisionThreadInputUILocation   = '/CheapLithium/rest/getDecisionThreadCurrentUserInterface';
	private _decisionThreadHitDecideLocation = '/CheapLithium/rest/applyHumanDecisionOnDecisionThread';

	constructor( private httpClient : HttpClient) { }

	getDecisionThread ( uuid : string ): Observable<BackendDecisionThread> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendDecisionThread>(this._decisionThreadLocation + uuid, {params:httpParameters});
	}
	
	getDecisionThreadIndex() : Observable<BackendDecisionThreadIndex> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendDecisionThreadIndex>( this._decisionThreadListLocation, {params:httpParameters});
	}
	
	startDecisionThread ( uuid: string, ticketreference:string ):Observable<BackendThreadUUIDResult> {
		let formdata = new FormData();
		
		// what
		formdata.append("uuid", uuid);
		formdata.append("ticketreference", ticketreference)
		// add more data?
		
		return this.httpClient.post<BackendThreadUUIDResult>(this._decisionThreadStartLocation, formdata);
	}
	
	retryDecisionThread ( uuid: string ):Observable<BackendThreadUUIDResult> {
		let formdata = new FormData();
		
		formdata.append("uuid", uuid);
		
		return this.httpClient.post<BackendThreadUUIDResult>(this._decisionThreadRetryLocation, formdata);
	}
		
	getDecisionThreadReport( uuid:string ) : Observable<BackendDecisionThreadReport> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendDecisionThreadReport>( this._decisionThreadReportLocation + uuid, {params:httpParameters});
	}
	
	getDecisionThreadErrors( uuid:string ) : Observable<BackendDecisionThreadError> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendDecisionThreadError>( this._decisionThreadErrorsLocation + uuid, {params:httpParameters});
	}
	
	
	getDecisionThreadInputUI( uuid:string ) : Observable<BackendDecisionThreadInputUI> {
		let formdata = new FormData();
		
		formdata.append("uuid", uuid);
		
		return this.httpClient.post<any>(this._decisionThreadInputUILocation, formdata);
	}
	
	
	
	decideHITNodeOnDecisionThead(uuid: string, inputdata:Map<string,string>) : Observable<BackendThreadUUIDResult> {
		let formdata = new FormData();

		// FUKKEN Workaround...		
		const mapToObj = m => {
			  return Array.from(m).reduce((obj, [key, value]) => {
			    obj[key] = value;
			    return obj;
			  }, {});
			};
			
		let dict=JSON.stringify(mapToObj(inputdata));
		
		formdata.append("uuid", uuid);
		formdata.append("hitDecision", dict);
		
		return this.httpClient.post<BackendThreadUUIDResult>(this._decisionThreadHitDecideLocation, formdata);
	}
}
