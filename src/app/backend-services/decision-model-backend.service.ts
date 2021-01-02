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
	private _updateDecisionModelLocation    = '/CheapLithium/rest/updateDecisionModel';
	private _persistDecisionModelLocation   = '/CheapLithium/rest/persistDecisionModel';
	private _updateStartDataOfDecisionModelLocation = '/CheapLithium/rest/updateDecisionModelStartData';
	
	private _createDecisionNodeLocation     = '/CheapLithium/rest/createDecisionNode';
	private _updateDecisionNodeLocation     = '/CheapLithium/rest/updateDecisionNode';
	private _insertDecisionNodeTransitionLocation   = '/CheapLithium/rest/insertDecisionNodeTransition';
	private _updateDecisionNodeTransitionLocation   = '/CheapLithium/rest/updateDecisionNodeTransition';
	
	// TODO: these BackendServices:
	private _cloneDecisionModelLocation     = '/CheapLithium/rest/cloneDecisionModel';


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
	
	updateDecisionNodeForModel(dmuuid:string, dnuuid:string, name:string, type:string, kbarticle:string) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();

		// where		
		formdata.append("uuid",dmuuid);
		formdata.append("dnuuid", dnuuid);
		// what
		formdata.append("name", name);
		formdata.append("exectype", type);
		formdata.append("kbarticle", kbarticle);
		
		return this.httpClient.post<BackendModelUUIDResult>(this._updateDecisionNodeLocation, formdata);
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
	
    updateStartConfiguration(uuid: string, startnode: string, startenvironment: string) : Observable<BackendModelUUIDResult> {
    	let formdata = new FormData();

		formdata.append("uuid", uuid);
		formdata.append("startnode", startnode);
		formdata.append("startenvironment", startenvironment);
		
		return this.httpClient.post<BackendModelUUIDResult>( this._updateStartDataOfDecisionModelLocation, formdata);
    }
	
	
	// NYI in backend
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
	
	/**
	 * Inserts a new transition to a given decision node in a given decision model.
	 *
	 * @param uuid - the decision model uuid as string
     * @param dnuuid - the decision node uuid as string
	 * @param transition - the transition to insert as BackendDecisionModelDecisionNodeOutcome
	 * @returns An observer ...
     */
	insertDecisionNodeTransition(uuid:string, dnuuid:string, transition:BackendDecisionModelDecisionNodeOutcome) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();
		
		formdata.append("uuid", uuid);
		formdata.append("dnuuid", dnuuid);
		formdata.append("transition", JSON.stringify(transition));
		
		return this.httpClient.post<BackendModelUUIDResult>( this._insertDecisionNodeTransitionLocation, formdata);
	}
	
	/**
	 * Updates a given transition(by index) for a given decision node in a given decision model.
	 *
	 * @param uuid - the decision model uuid as string
     * @param dnuuid - the decision node uuid as string
     * @param tindex - the index if the ransition to update as number
	 * @param transition - the transition to insert as BackendDecisionModelDecisionNodeOutcome
	 * @returns An observer ...
     */
	updateDecisionNodeTransition(uuid:string, dnuuid:string, tindex:number, updtransition:BackendDecisionModelDecisionNodeOutcome ) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();
		
		formdata.append("uuid", uuid);
		formdata.append("dnuuid", dnuuid);
		formdata.append("index", tindex.toString() );
		formdata.append("transition", JSON.stringify(updtransition));
		
		return this.httpClient.post<BackendModelUUIDResult>( this._updateDecisionNodeTransitionLocation, formdata);
	}
	
	
}
