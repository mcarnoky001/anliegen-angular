import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit  {
  message: string;

    constructor(public authService: AuthService, public router: Router) {
      this.setMessage();
    }

    setMessage() {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
      this.message = 'Trying to log in ...';

      this.authService.login().subscribe(() => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';
          // Redirect the user
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
