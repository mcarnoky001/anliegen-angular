import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [ AuthService ]
})
export class MainContentComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
