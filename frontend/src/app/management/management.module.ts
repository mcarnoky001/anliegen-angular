import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ManagementUsersComponent } from './management-users/management-users.component';
import { ManagementUserComponent } from './management-user/management-user.component';

import { AuthGuard } from '../authentication-module/auth-guard.service';
import { UsersService } from './users.service';



const managementRoutes: Routes = [
  {
    path: 'management',
    children: [
      { path: 'users', component: ManagementUsersComponent },
      { path: 'user', component: ManagementUserComponent },
    ],
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(managementRoutes),
    CommonModule,
    FormsModule
  ],
  declarations: [ManagementUsersComponent, ManagementUserComponent],
  providers: [ UsersService ]
})
export class ManagementModule { }
