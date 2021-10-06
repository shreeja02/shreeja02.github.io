import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/models/Users';
import { UsersService } from 'src/app/shared/services/users.service';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  isUpdateClicked: boolean = false;
  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'phoneNumber', 'action'];
  dataSource = new MatTableDataSource<User>(this.users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUserDetails();
  }

  loadDataSource() {
    this.dataSource.data = this.users;
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  getAllUserDetails() {
    this.users = this.userService.getAllUsers();
    this.loadDataSource();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    this.loadDataSource();
  }

  addNewUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users = this.userService.addUser(result)
        this.loadDataSource();
      }
    });
  }

  onEditClicked(element: any) {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px',
      data: { element }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users = this.userService.updateUser(result);
        this.loadDataSource();
      }
    });

  }

  onDeleteClicked(user: any) {
    this.users = this.userService.deleteUser(user);
    this.loadDataSource();

  }

}
