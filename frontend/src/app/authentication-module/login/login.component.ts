import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpConnectionService } from '../../services/http-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, HttpConnectionService]
})
export class LoginComponent implements OnInit  {
    message: string;

    username: string;
    password: string;

    constructor(
      public authService: AuthService, 
      public router: Router,
      private httpConnectionService: HttpConnectionService
    ) {
      this.setMessage();
    }

    setMessage() {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
      this.authService.login(this.username, this.password)
        .subscribe(res => {
          let tokenJSONText = JSON.stringify(res);
          let tokenJSON = JSON.parse(tokenJSONText);
          localStorage.setItem('app-token', tokenJSON.token);
          localStorage.setItem('app-login', 'true');
          if (this.authService.isLoggedIn) {
            this.router.navigate([this.authService.redirectUrl]);
          }
      });
    }

    logout() {
      this.authService.logout();
      this.setMessage();
    }

    ngOnInit() {

    }

}
