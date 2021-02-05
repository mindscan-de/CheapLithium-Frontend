import {BackendDecisionThreadErrorItemData} from './backend-decision-thread-error-item-data';

export class BackendDecisionThreadErrorItem {
	public timestamp: number = 0.0;
	public level: string = "";
	public message: string =  "";
	public data: BackendDecisionThreadErrorItemData = new BackendDecisionThreadErrorItemData();
}
