import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material";
import { fuseAnimations } from "@fuse/animations";
import { ModalComponent } from "../../modal/modal.component";

@Component({
    selector: "profile-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ProfileAboutComponent implements OnInit, OnDestroy {
    email: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '700px',
      data: {}
    });

   /*  dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    }); */
  }
    ngOnInit(): void {}

    /**
     * On destroy
     */
    ngOnDestroy(): void {}
}
