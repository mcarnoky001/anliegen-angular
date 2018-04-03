import { Component, OnInit } from '@angular/core';

import { AuthService } from './authentication-module/auth.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [AuthService]
})
export class AppComponent  {

  constructor(private authService: AuthService) {}

  ngOnInit() {

  }
}
