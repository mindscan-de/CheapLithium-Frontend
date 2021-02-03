import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BackendDecisionThread } from '../backend-services/backend-model/backend-decision-thread';
import { BackendDecisionThreadReport } from '../backend-services/backend-model/backend-decision-thread-report';
import { BackendDecisionThreadReportItem } from '../backend-services/backend-model/backend-decision-thread-report-item';


import { DecisionThreadBackendService } from '../backend-services/decision-thread-backend.service';

@Component({
  selector: 'app-show-decision-thread-report',
  templateUrl: './show-decision-thread-report.component.html',
  styleUrls: ['./show-decision-thread-report.component.css']
})
export class ShowDecisionThreadReportComponent implements OnInit {
	
	public decisionThread: BackendDecisionThread = new BackendDecisionThread();
	public decisionThreadReportItems: BackendDecisionThreadReportItem[] = [];
	public decisionThreadReportSelection: boolean[] = [];
	public combinedReport: string = "";

	constructor(private activatedRoute : ActivatedRoute, private backendThreadService: DecisionThreadBackendService) { }

	ngOnInit(): void {
		var threaduuid = this.activatedRoute.snapshot.params['uuid'];
			
		this.retrieveThread(threaduuid);
	}

	retrieveThread(threaduuid: string) : void {
		this.backendThreadService.getDecisionThread(threaduuid).subscribe(
			data => this.onDecisionThreadLoaded(data),
			error => this.onDecisionThreadFailed(error)
		);
	}
	
    onDecisionThreadLoaded(thread: BackendDecisionThread) : void {
		this.decisionThread = thread;
		
		this.backendThreadService.getDecisionThreadReport(thread.uuid).subscribe(
			data => this.onDecisionThreadReportLoaded(data),
			error => this.onDecisionThreadReportFailed(error)
		);
    }

	onDecisionThreadReportLoaded ( report: BackendDecisionThreadReport ): void {
		this.decisionThreadReportItems = report.reportitems;
		this.decisionThreadReportSelection = new Array<boolean>(report.reportitems.length).fill(true); 
	}
	
	onDecisionThreadReportFailed(error: any) : void {
		console.log(error);
	}
	
    onDecisionThreadFailed(error: any) : void {
        console.log(error);
    }
	
	/* use the list and copy all together and show report in combined report area. */
	onUseSelected() : void {
		console.log(this.decisionThreadReportSelection)
		
		let newreport:string[] = [];
		for(let i = 0;i<this.decisionThreadReportItems.length;i++) {
			if(this.decisionThreadReportSelection[i]) {
				/* Not very nice but good enough? */
				if(i!=0) {
					if(this.decisionThreadReportItems[i].nodereport.startsWith("h4. ")) {
						newreport.push("\n\n");
					}
					if(this.decisionThreadReportItems[i].nodereport.startsWith("h5. ")) {
						newreport.push("\n\n");
					}
				}
				newreport.push(this.decisionThreadReportItems[i].nodereport);
			}
		}
		this.combinedReport = newreport.join('');
	}
	
}
