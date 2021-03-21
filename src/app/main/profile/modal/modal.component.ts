import { Subject } from '@angular-devkit/core/node_modules/rxjs';
import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmDialogComponent } from 'app/main/manage-account/confirm-dialog/confirm-dialog.component';

interface DialogData {
  email: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;

   // Private
   private _unsubscribeAll: Subject<any>;

   /**
    * Constructor
    *
    * @param {FormBuilder} _formBuilder
    */

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog) {

      this._unsubscribeAll = new Subject();
    }

    
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
       // Vertical Stepper form stepper
       this.verticalStepperStep1 = this._formBuilder.group({
        FullName: ['', Validators.required],
        Email : ['', Validators.required],
        Phone : ['', Validators.required],
        JobTitle : ['', Validators.required],
  
  
    });
  
    this.verticalStepperStep2 = this._formBuilder.group({
        serviceDelivery: ['', Validators.required]
    });
  
    this.verticalStepperStep3 = this._formBuilder.group({
      Products     : ['', Validators.required],
      Service   : ['', Validators.required],
      Partnership  : ['', [Validators.required]],
      Expertise  : ['', [Validators.required]],
      Requirement  : ['', [Validators.required]],
      
    });
  
  }
  finishVerticalStepper(): void
  {
   this.dialog.open(ConfirmDialogComponent, {
     width: '500px',
   });
  }

}
