import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostComponent } from './components/post/post.component';

const routes: Route[] = [
  {
    path: '/user-list',
    component: UserListComponent,
  },
  {
    path: 'userdetails',
    component: UserDetailsComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
