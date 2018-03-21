import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [AuthService]
})
export class AppComponent  {
  name = 'Angular 5';
  text = 'This is text before click.';

  constructor(private authService: AuthService) {}

  ngOnInit() {

  }
}
