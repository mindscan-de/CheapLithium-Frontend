import {BackendDecisionModelDecisionNodeOutcome} from './backend-decision-model-decision-node-outcome';

export class BackendDecisionModelDecisionNode {
	public uuid:string = "";
	public name:string = "";
	public type:string = "";
	public kbarticle: string = "";
	public nextActions: BackendDecisionModelDecisionNodeOutcome[]= []  
}
