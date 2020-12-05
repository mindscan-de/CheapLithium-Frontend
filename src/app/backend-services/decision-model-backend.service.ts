import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

// include the BackendModel defintion
import { BackendDecisionModel } from './backend-model/backend-decision-model';
import { BackendDecisionModelIndex } from './backend-model/backend-decision-model-index';
import { BackendModelUUIDResult } from './backend-model/backend-model-uuidresult';

import { BackendDecisionModelDecisionNodeOutcome } from './backend-model/backend-decision-model-decision-node-outcome';

@Injectable({
  providedIn: 'root'
})
export class DecisionModelBackendService {
	
	private _decisionModelLocation          = '/CheapLithium/rest/getDecisionModel/';
	private _decisionModelListLocation      = '/CheapLithium/rest/getDecisionModelList';
	private _createDecisionModelLocation    = '/CheapLithium/rest/createDecisionModel';
	private _persistDecisionModelLocation   = '/CheapLithium/rest/persistDecisionModel';
	private _createDecisionNodeLocation     = '/CheapLithium/rest/createDecisionNode';
	
	// TODO: these BackendServices:
	private _updateDecisionModelLocation    = '/CheapLithium/rest/updateDecisionModel';
	private _cloneDecisionModelLocation     = '/CheapLithium/rest/cloneDecisionModel';
	private _insertDecisionNodeTransitionLocation   = '/CheapLithium/rest/insertDecisionNodeTransition';
	private _updateDecisionNodeTransitionLocation   = '/CheapLithium/rest/updateDecisionNodeTransition';
	

	constructor( private httpClient : HttpClient) { }

	getDecisionModel ( uuid: string ) : Observable<BackendDecisionModel> {
		let httpParamteres= new HttpParams();
		
		return this.httpClient.get<BackendDecisionModel>( this._decisionModelLocation + uuid, {params:httpParamteres} );
	}
	
	getDecisionModelIndex () : Observable<BackendDecisionModelIndex> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendDecisionModelIndex>( this._decisionModelListLocation, {params:httpParameters} )
	}

	createDecisionModel(name:string, displayname:string, description:string, version:string) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();
		
		formdata.append("name", name);
		formdata.append("description", description);
		formdata.append("displayname", displayname);
		formdata.append("version", version);
		
		return this.httpClient.post<BackendModelUUIDResult>( this._createDecisionModelLocation, formdata);
	}
	
	createDecisionNodeForModel(name:string, type:string, kbarticle:string, dmuuid:string ) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();

		formdata.append("name", name);
		formdata.append("exectype", type);
		formdata.append("kbarticle", kbarticle);
		formdata.append("dmuuid", dmuuid);
		
		return this.httpClient.post<BackendModelUUIDResult>(this._createDecisionNodeLocation, formdata);
	}
	
	updateDecisionModel(uuid:string, name:string, displayname: string, description:string, version:string) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();
		
		formdata.append("uuid", uuid);
		formdata.append("name", name);
		formdata.append("description", description);
		formdata.append("displayname", displayname);
		formdata.append("version", version);

		return this.httpClient.post<BackendModelUUIDResult>( this._updateDecisionModelLocation, formdata);
	}
	
	cloneDecisionModel(uuid:string, name:string, displayname: string, description:string, version:string) : Observable<BackendModelUUIDResult> {
		// the model uuid: will be used as a template with these modifications
		let formdata = new FormData();
		
		formdata.append("uuid", uuid);
		
		// maybe use copy then edit
		/*formdata.append("name", name);
		formdata.append("description", description);
		formdata.append("displayname", displayname);
		formdata.append("version", version);*/

		return this.httpClient.post<BackendModelUUIDResult>( this._cloneDecisionModelLocation, formdata);
	}
	
    persistDecisionModel(uuid: string) : Observable<BackendModelUUIDResult>{
        let formdata = new FormData();

		formdata.append("uuid",uuid)

		return this.httpClient.post<BackendModelUUIDResult>( this._persistDecisionModelLocation, formdata);
    }
	
	
	// 	
	
	insertDecisionNodeTransition(uuid:string, dnuuid:string, transition:BackendDecisionModelDecisionNodeOutcome) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();
		
		formdata.append("uuid", uuid);
		formdata.append("dnuuid", dnuuid);
		formdata.append("transition", JSON.stringify(transition));
		
		return this.httpClient.post<BackendModelUUIDResult>( this._insertDecisionNodeTransitionLocation, formdata);
	}
	
	updateDecisionNodeTransition(uuid:string, dnuuid:string, tindex:number, updtransition:BackendDecisionModelDecisionNodeOutcome ) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();
		
		formdata.append("uuid", uuid);
		formdata.append("dnuuid", dnuuid);
		formdata.append("index", tindex.toString() );
		formdata.append("transition", JSON.stringify(updtransition));
		
		return this.httpClient.post<BackendModelUUIDResult>( this._updateDecisionNodeTransitionLocation, formdata);
	}
}
