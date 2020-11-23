export class BackendDecisionModelDecisionNodeOutcome {
	public name: string = "";
	
	// it is either a follownode, or a follow model, distinguished by node type.
	public next: string = "";
	
	public template: string = "";
}
