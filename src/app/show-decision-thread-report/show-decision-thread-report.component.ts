import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BackendDecisionThread } from '../backend-services/backend-model/backend-decision-thread';

import { DecisionThreadBackendService } from '../backend-services/decision-thread-backend.service';

@Component({
  selector: 'app-show-decision-thread-report',
  templateUrl: './show-decision-thread-report.component.html',
  styleUrls: ['./show-decision-thread-report.component.css']
})
export class ShowDecisionThreadReportComponent implements OnInit {
	
	public decisionThread: BackendDecisionThread = new BackendDecisionThread();

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
    }
	
    onDecisionThreadFailed(error: any) : void {
        console.log(error);
    }
	

}
