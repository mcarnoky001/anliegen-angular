import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router }      from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [ AuthService ]
})
export class MainMenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    $('.ui.dropdown')
      .dropdown()
    ;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login'])
  }

}
