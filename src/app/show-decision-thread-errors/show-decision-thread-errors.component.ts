import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BackendDecisionThread } from '../backend-services/backend-model/backend-decision-thread';

import { DecisionThreadBackendService } from '../backend-services/decision-thread-backend.service';
import { BackendDecisionThreadError } from '../backend-services/backend-model/backend-decision-thread-error';
import { BackendDecisionThreadErrorItem } from '../backend-services/backend-model/backend-decision-thread-error-item';

@Component({
  selector: 'app-show-decision-thread-errors',
  templateUrl: './show-decision-thread-errors.component.html',
  styleUrls: ['./show-decision-thread-errors.component.css']
})
export class ShowDecisionThreadErrorsComponent implements OnInit {
	
	public decisionThread: BackendDecisionThread = new BackendDecisionThread();
	public decisionThreadErrorItems:BackendDecisionThreadErrorItem[] = [];

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
	
	onDecisionThreadFailed(error: any) : void {
		console.log(error);
	}

    onDecisionThreadLoaded(thread: BackendDecisionThread) : void {
		this.decisionThread = thread;

		// we know that this thread exist before sending another rquest for this uuid
 		this.backendThreadService.getDecisionThreadErrors(thread.uuid).subscribe(
			data => this.onDecisionThreadErrorsLoaded(data),
			error => this.onDecisionThreadErrrosFailed(error)
		)

    }

    onDecisionThreadErrrosFailed(error: any): void {
        console.log(error);
    }

    onDecisionThreadErrorsLoaded(data: BackendDecisionThreadError): void {
		this.decisionThreadErrorItems = data.errorlog;
    }

	onShowErrorDetails(erroritem:BackendDecisionThreadErrorItem) : void {
		// Als modaler dialog? für die details?
	}

}
