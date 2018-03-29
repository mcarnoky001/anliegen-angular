import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

    constructor() { }
    private subject = new Subject<any>();
    class: any;

    sendMessage(message: any) {
        this.subject.next({ text: message });              
    }

    clearMessage() {
        this.subject.next();
    }

    error(message) {
        this.class = 'error';
        this.sendMessage(message);
        setTimeout(() => this.clearMessage(), 5000);
    }

    warning(message) {
        this.class = 'warning';
        this.sendMessage(message);
        setTimeout(() => this.clearMessage(), 5000);
    }

    info(message) {
        this.class = 'info';
        this.sendMessage(message);
        setTimeout(() => this.clearMessage(), 5000);
    }

    success(message) {
        this.class = 'success';
        this.sendMessage(message);
        setTimeout(() => this.clearMessage(), 5000);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}