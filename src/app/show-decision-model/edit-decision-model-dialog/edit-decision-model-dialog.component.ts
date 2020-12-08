import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Backend Model
// TODO: add the Model component 


@Component({
  selector: 'app-edit-decision-model-dialog',
  templateUrl: './edit-decision-model-dialog.component.html',
  styleUrls: ['./edit-decision-model-dialog.component.css']
})
export class EditDecisionModelDialogComponent  {
	
	public dmName: string = "";
	public dmDescription: string = "";
	public dmVersion: string = "";
	public dmDisplayName: string = "";

	constructor(public activeModal: NgbActiveModal ) { }

	setDialogData() : void {
		
	}

	onUpdate() : void {
		// Maybe we should pass an observable to the model back, with the BackendModelUUIDResult
		
		this.activeModal.close('update');
	}

}
