import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './components/post';
import { User } from './components/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getAllUsers = (): Observable<User[]> => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this._http.get<User[]>(url);
  };

  getPostsById(id: number): Observable<Post[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=';
    return this._http.get<Post[]>(url + id);
  }
}
