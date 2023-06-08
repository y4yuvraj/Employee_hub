import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { MaslGuard } from './masl.guard';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { ShowUsersComponent } from './show-users/show-users.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'addUser', component: AddUserComponent, canActivate: [MaslGuard] },
  { path: 'showUsers', component: ShowUsersComponent, canActivate: [MaslGuard] },
  { path: 'rxjs', component: RxjsLearningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
