import {BackendDecisionModelDecisionNodeOutcome} from './backend-decision-model-decision-node-outcome';

export class BackendDecisionModelDecisionNode {
	public uuid:string = "";
	public name:string = "";
	public type:string = "";
	public kbarticle: string = "";
	public nextactions: BackendDecisionModelDecisionNodeOutcome[]= []
	
	// TODO:
	// those both things will be filled so we can run nonhumantasks too.
	// this will describe the operation(s) to do at this node, and what to do with the result
	public operation:string = "";
	// 
	public result:string = "";

}
