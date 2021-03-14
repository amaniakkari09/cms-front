import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UpdateStatusComponent } from '../update-status/update-status.component';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, AfterViewInit {

    dataSource: MatTableDataSource<any>;
    displayedColumns = ['email', 'created_at', 'active', 'actions'];
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    accounts: any[] = []

  constructor(
    private accountsService: AccountsService,
    public dialog: MatDialog
  ) {
    this.getUsers();
   }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  async getUsers(){
    this.dataSource = new MatTableDataSource<any>();
    this.accountsService.findAll().subscribe(
      (data: any[]) => {
        this.accounts = data;
        this.dataSource.data = this.accounts;
      }
    )
    this.dataSource.paginator = this.paginator;
  }

  updateStatus(element){
    //alert('Update status: ' + element.email)
    // Open Dialog here to confirm updating status
    const updateStatusDialog = this.dialog.open(UpdateStatusComponent, {
      width: '500px',
      data: element.email
    });

    updateStatusDialog.componentInstance.email = element.email;

    updateStatusDialog.afterClosed().subscribe((result) => {
      console.log(result);
      // 
      // if result true --> update status else keep old status and button values
    });
  }

}