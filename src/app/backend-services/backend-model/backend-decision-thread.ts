export class BackendDecisionThread {
	
	public uuid: string = "";
	public environment: Map<string, Object> = new Map<string,Object>();
	public currentstate: string = "WAIT";
	public currentmodel: string = "";
	public currentnode: string = "";
	public ticketreference: string[] = [];
	public owner: string = "";
}
