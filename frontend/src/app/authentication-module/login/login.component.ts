import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
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
      public router: Router,
      private httpConnectionService: HttpConnectionService,
      private userService: UserService
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
          this.userService.login()
            .subscribe(res => {
              let user = res[0];
              localStorage.setItem('app-username', user.fields.username);
              
            });
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
