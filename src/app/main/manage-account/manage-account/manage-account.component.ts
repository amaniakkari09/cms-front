import { Component, OnInit } from '@angular/core';
import {OnDestroy, ViewEncapsulation  } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss'],
  encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ManageAccountComponent implements OnInit {
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;

   // Horizontal Stepper
   horizontalStepperStep1: FormGroup;
   horizontalStepperStep2: FormGroup;
   horizontalStepperStep3: FormGroup;

  resetPasswordForm: FormGroup;

 

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FormBuilder} _formBuilder
   */
  constructor(
      private _formBuilder: FormBuilder,
      public dialog: MatDialog
  )
  {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
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

  

 // Horizontal Stepper form steps
 this.horizontalStepperStep1 = this._formBuilder.group({
  firstName: ['', Validators.required],
  lastName : ['', Validators.required]
});

this.horizontalStepperStep2 = this._formBuilder.group({
  address: ['', Validators.required]
});

this.horizontalStepperStep3 = this._formBuilder.group({
  city      : ['', Validators.required],
  state     : ['', Validators.required],
  postalCode: ['', [Validators.required, Validators.maxLength(5)]]
});

// Update the validity of the 'passwordConfirm' field
// when the 'password' field changes
this.resetPasswordForm
    .get("password")
    .valueChanges.pipe(takeUntil(this._unsubscribeAll))
    .subscribe(() => {
        this.resetPasswordForm
            .get("passwordConfirm")
            .updateValueAndValidity();
    });
}
    finishHorizontalStepper(): void
    {
        alert('You have finished the horizontal stepper!');
    }

    
    finishVerticalStepper(): void
     {
      this.dialog.open(ConfirmDialogComponent, {
        width: '500px',
      });
     }

    }