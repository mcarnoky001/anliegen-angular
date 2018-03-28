import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

    constructor() {
        console.log('Message Service Initiated');
    }
    private subject = new Subject<any>();
    class: any;

    sendMessage(data: any) {
        this.class = data.class; 
        this.subject.next({ text: data.message });              
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}