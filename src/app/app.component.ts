import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  text = 'This is text before click.';

  ngOnInit() {
    $('.ui.dropdown')
      .dropdown()
    ;
  }
}
