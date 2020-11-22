
import {BackendDecisionModelDecisionNode } from './backend-decision-model-decision-node';

export class BackendDecisionModel {
	
	public uuid : string = "";
	public name : string = "";
	public version: string = "";
	public startnode: string = "";
	public nodes: BackendDecisionModelDecisionNode[] = [];
	
}
