export class BackendDecisionModelDecisionNodeOutcome {
	public name: string = "";
	
	// it is either a follownode, or a follow model, distinguished by node type.
	public next: string = "";
	
	public template: string = "";
	
	// one of the operations must return true, then the model will proceed automatically
	// with the correct transition, is most likely to be a boolean expression
	// part of the upcomming workflow engine stuff, so things can be done automatically.
	public transitif: string = "";
}
