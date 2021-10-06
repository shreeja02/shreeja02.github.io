import { Injectable } from '@angular/core';
import { User } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    {
      userId: 1,
      firstName: 'Jack',
      lastName: 'Shah',
      emailId: 'jack@gmail.com',
      phoneNumber: 989812344,

    },
    {
      userId: 2,
      firstName: 'Johnson',
      lastName: 'Mathew',
      emailId: 'johnson@gmail.com',
      phoneNumber: 7893123455
    },

  ];

  constructor() { }

  getAllUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    user.userId = this.users.length + 1;
    this.users.push(user);
    return this.users;
  }

  updateUser(user: User) {
    const index = this.users.findIndex(u => user.userId === u.userId);
    this.users[index] = user;
    return this.users;
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
    return this.users;
  }
}
