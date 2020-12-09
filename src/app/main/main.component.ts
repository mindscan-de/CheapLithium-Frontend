import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// import the backend service, which provides the decision model data
import { DecisionModelBackendService } from '../backend-services/decision-model-backend.service';
import { BackendDecisionModelIndex } from '../backend-services/backend-model/backend-decision-model-index'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	
	constructor( private activatedRoute : ActivatedRoute, private backendService: DecisionModelBackendService) { }

	ngOnInit(): void {
	}
	
	
}
