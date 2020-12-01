import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { DecisionThreadBackendService }  from '../backend-services/decision-thread-backend.service';


import { BackendDecisionThreadIndex } from '../backend-services/backend-model/backend-decision-thread-index';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
	
	public decisionThreadIndex: BackendDecisionThreadIndex = new BackendDecisionThreadIndex();

	constructor( private activatedRoute : ActivatedRoute, private backendService: DecisionThreadBackendService) { }

	ngOnInit(): void {
		this.backendService.getDecisionThreadIndex().subscribe(
			data => this.onDecisionThreadIndexLoaded(data),
			error => this.onDecisionThreadIndexFailed(error)
		);
	}

	onDecisionThreadIndexLoaded( index: BackendDecisionThreadIndex):void {
		this.decisionThreadIndex = index;
	}
	
	onDecisionThreadIndexFailed(message):void {
		console.log(message);
	}
	
}
