import {BackendDecisionModelDecisionNodeOutcome} from './backend-decision-model-decision-node-outcome';

export class BackendDecisionModelDecisionNode {
	public uuid:string = "";
	public name:string = "";
	public type:string = "";
	// this will contain the action taken at this node.
	public nodeaction: string = "";
	public kbarticle: string = "";
	public nextactions: BackendDecisionModelDecisionNodeOutcome[]= []
}
