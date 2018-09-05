import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  //----------------PROPERTIRS-------------------

  title: string;
  message: string;

  //----------------CONSTRUCTOR------------------

  constructor(dialogService: DialogService) {
    super(dialogService);

  }

  //----------------METHODS-------------------

  confirm() {
    // set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }

}
