import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  id!: number;
  posts:Post[] = [];
  constructor(
    private _activatedroute: ActivatedRoute,
    private _userService: UserService
  ) {}
  ngOnInit() {
    this._activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      let id = params.get('id');
      console.log(id);
      if (id) {
        this.id = parseInt(id);
      }
      console.log(this.id);
    });
    this._userService.getPostsById(this.id).subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
}
