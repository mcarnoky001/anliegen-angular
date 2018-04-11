import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';

import { AuthService } from '../authentication-module/auth.service';
import { UserService } from '../authentication-module/user.service';

declare var $:any;

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    $('.ui.dropdown')
      .dropdown()
    ;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login'])
  }

  getUsername() {
    return this.userService.getUsername();
  }

}
