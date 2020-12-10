import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { BackendDecisionThread } from './backend-model/backend-decision-thread';
import { BackendDecisionThreadIndex } from './backend-model/backend-decision-thread-index';
import { BackendThreadUUIDResult } from './backend-model/backend-thread-uuidresult';


@Injectable({
  providedIn: 'root'
})
export class DecisionThreadBackendService {
	
	private _decisionThreadLocation          = '/CheapLithium/rest/getDecisionThread/';
	private _decisionThreadListLocation      = '/CheapLithium/rest/getDecisionThreadList';
	private _decisionThreadStartLocation     = '/CheapLithium/rest/startDecisionThread';
	
	// TODO: this is the reporting Backend URL - which converts a thread into a report, using the logged transitions
	private _decisionThreadReportLocation    = '/CheapLithium/rest/getDecisionThreadReport/';
	

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
		let httpParameters = new HttpParams();
		
		// what
		httpParameters.append("uuid", uuid);
		httpParameters.append("ticketreference", ticketreference)
		// add more data?
		
		return this.httpClient.post<BackendThreadUUIDResult>(this._decisionThreadStartLocation, {params:httpParameters});
	}
}
