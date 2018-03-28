import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../services/message.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
declare var $:any;
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: any;
  class: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage()
      .subscribe(message => { 
        this.message = message;
        this.class = this.messageService.class; 
      });
  }

  ngOnInit() {
    $('.message .close')
      .on('click', function() {
        $(this)
          .closest('.message')
          .transition('fade')
        ;
      })
    ;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
