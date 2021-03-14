import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.scss']
})
export class UpdateStatusComponent implements OnInit {

  email: string;

  constructor(public dialogRef: MatDialogRef<UpdateStatusComponent>) {}

  ngOnInit() {
  }

}