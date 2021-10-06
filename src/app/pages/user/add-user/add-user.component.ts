import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addNewUserForm!: FormGroup;
  formData: any;

  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formData = data.element;
  }


  ngOnInit(): void {
    if (this.formData) {
      this.addNewUserForm = this.createNewForm(this.formData)
    }
    else {
      this.addNewUserForm = this.createNewForm();

    }
  }

  saveUserDetails() {

  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  get firstName() { return this.addNewUserForm.get('firstName') }
  get lastName() { return this.addNewUserForm.get('lastName') }
  get emailId() { return this.addNewUserForm.get('emailId') }
  get phoneNumber() { return this.addNewUserForm.get('phoneNumber') }


  createNewForm(data: any = {}) {
    return this.fb.group({
      userId: [data?.userId],
      firstName: [data?.firstName, Validators.required],
      lastName: [data?.lastName, Validators.required],
      emailId: [data?.emailId, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      phoneNumber: [data?.phoneNumber, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],

    })
  }

}
