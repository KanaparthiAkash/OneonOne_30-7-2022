import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  constructor(private _router: Router) {}

  ngOnInit() {}

  // getposts(id: number) {
  //   this._router.navigate(['/posts'], { queryParams: { userId: id }});
  // }
}
