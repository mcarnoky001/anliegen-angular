import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';

const authenticationRoutes: Routes = [
  { path: 'login', component: LoginComponent  },
]


@NgModule({
  imports: [
    RouterModule.forChild(authenticationRoutes),
    CommonModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [AuthGuard, UserService, AuthService]
})
export class AuthenticationModule { }
