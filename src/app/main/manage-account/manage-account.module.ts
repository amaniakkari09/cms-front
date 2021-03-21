import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';




@NgModule({
  declarations: [ManageAccountComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,

    FuseSharedModule,

  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class ManageAccountModule { }
