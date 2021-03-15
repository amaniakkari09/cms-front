import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { MaterialModule } from '../material.module';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginator, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateStatusComponent } from './update-status/update-status.component';


@NgModule({
  declarations: [AccountsComponent, UpdateStatusComponent],
  imports: [
    CommonModule,
    MaterialModule,

    BrowserAnimationsModule
  ],
  providers: [
    
  ],
  entryComponents: [UpdateStatusComponent]
})
export class AccountsModule { }
