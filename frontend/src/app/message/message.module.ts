import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';

import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MessageService],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class MessageModule { }
