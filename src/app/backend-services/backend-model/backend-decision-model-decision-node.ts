export class BackendDecisionModelDecisionNode {
	public uuid:string = "";
	public type:string = "";
	public kbarticle: string = "";
	public outcomes: Map<string,string> = new Map<string, string>();
	public outcomeTemplates: Map<string, string> = new Map<string, string>();
}
