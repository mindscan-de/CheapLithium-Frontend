import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BackendDecisionThreadErrorItem } from '../../backend-services/backend-model/backend-decision-thread-error-item';

@Component({
  selector: 'app-show-error-item-dialog',
  templateUrl: './show-error-item-dialog.component.html',
  styleUrls: ['./show-error-item-dialog.component.css']
})
export class ShowErrorItemDialogComponent {
	
    public errorItem: BackendDecisionThreadErrorItem= new BackendDecisionThreadErrorItem();

	constructor(public activeModal: NgbActiveModal) { }

	setDialogData( errorItem : BackendDecisionThreadErrorItem ) : void {
		this.errorItem = errorItem;
	}
	
}
