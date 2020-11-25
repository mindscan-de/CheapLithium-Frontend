import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

// include the BackendModel defintion
import { BackendDecisionModel } from './backend-model/backend-decision-model';
import { BackendModelUUIDResult } from './backend-model/backend-model-uuidresult';

@Injectable({
  providedIn: 'root'
})
export class DecisionModelBackendService {
	
	private _decisionModelLocation          = '/CheapLithium/rest/getDecisionModel/';
	// TODO: these BackendServices:
	private _createDecisionModelLocation    = '/CheapLithium/rest/createDecisionModel';
	private _updateDecisionModelLocation    = '/CheapLithium/rest/updateDecisionModel';
	private _cloneDecisionModelLocation    = '/CheapLithium/rest/cloneDecisionModel';

	constructor( private httpClient : HttpClient) { }

	getDecisionModel ( uuid: string ) : Observable<BackendDecisionModel> {
		let httpParamteres= new HttpParams();
		
		return this.httpClient.get<BackendDecisionModel>( this._decisionModelLocation + uuid, {params:httpParamteres} );
	}

	createDecisionModel(name:string, displayname:string, description:string, version:string) : Observable<BackendModelUUIDResult> {
		let formdata = new FormData();
		
		formdata.append("name", name);
		formdata.append("description", description);
		formdata.append("displayname", displayname);
		formdata.append("version", version);
		
		return this.httpClient.post<BackendModelUUIDResult>( this._createDecisionModelLocation, formdata);
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
}
