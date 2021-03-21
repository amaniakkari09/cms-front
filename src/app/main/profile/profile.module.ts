import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material.module';
import { ProfileAboutComponent } from './profile/about/about.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [ProfileComponent, ProfileAboutComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ProfileModule { }
