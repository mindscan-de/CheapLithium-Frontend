import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { BackendDecisionThread } from './backend-model/backend-decision-thread';
import { BackendDecisionThreadIndex } from './backend-model/backend-decision-thread-index';

@Injectable({
  providedIn: 'root'
})
export class DecisionThreadBackendService {
	
	private _decisionThreadLocation          = '/CheapLithium/rest/getDecisionThread/';
	private _decisionThreadListLocation      = '/CheapLithium/rest/getDecisionThreadList';
	

	constructor( private httpClient : HttpClient) { }

	getDecisionThread ( uuid : string ): Observable<BackendDecisionThread> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendDecisionThread>(this._decisionThreadLocation + uuid, {params:httpParameters});
	}
	
	getDecisionThreadIndex() : Observable<BackendDecisionThreadIndex> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendDecisionThreadIndex>( this._decisionThreadListLocation, {params:httpParameters});
	}
}
