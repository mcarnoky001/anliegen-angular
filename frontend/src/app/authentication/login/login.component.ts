import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit  {
    message: string;

    username: string;
    password: string;

    constructor(public authService: AuthService, public router: Router) {
      this.setMessage();
    }

    setMessage() {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
      this.authService.login(this.username, this.password)
        .subscribe(res => {
          
          localStorage.setItem('app-token', JSON.stringify(res));
          localStorage.setItem('app-login', 'true');
          if (this.authService.isLoggedIn) {
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'finalizedtaskscleark';
            this.router.navigate([redirect]);
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
