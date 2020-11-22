import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

// include the BackendModel defintion
import { BackendDecisionModel } from './backend-model/backend-decision-model';


@Injectable({
  providedIn: 'root'
})
export class DecisionModelBackendService {
	
	private _decisionModelLocation = '/CheapLithium/rest/decisionmodel/';

	constructor( private httpClient : HttpClient) { }

	getDecisionModel ( uuid: string ) : Observable<BackendDecisionModel> {
		let httpParamteres= new HttpParams();
		
		return this.httpClient.get<BackendDecisionModel>( this._decisionModelLocation + uuid, {params:httpParamteres} );
	}

}
