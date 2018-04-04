import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpConnectionService } from '../../services/http-connection.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
    message: string;

    username: string;
    password: string;

    constructor(
      public authService: AuthService, 
      private httpConnectionService: HttpConnectionService,
      private userService: UserService
    ) {
      this.setMessage();
    }

    setMessage() {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
      this.authService.login(this.username, this.password);
    }

    logout() {
      this.authService.logout();
      this.setMessage();
    }

    ngOnInit() {

    }

}
