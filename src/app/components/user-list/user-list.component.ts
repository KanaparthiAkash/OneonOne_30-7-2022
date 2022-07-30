import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  user!:User;

  constructor(private _user: UserService) {}

  ngOnInit() {
    this._user.getAllUsers().subscribe((data) => {
      console.log(data);
      this.userList = data;
    });
  }

  getUser(user:User){
    this.user = user;
  }
}
