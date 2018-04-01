import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

    constructor() { }
    private subject = new Subject<any>();
    private showTime = 1500;
    class: any;

    private sendMessage(message: any) {
        this.subject.next({ text: message });              
    }

    clearMessage() {
        this.subject.next();
    }

    error(message) {
        this.class = 'error';
        this.sendMessage(message);
        this.setClearMessage();
    }

    warning(message) {
        this.class = 'warning';
        this.sendMessage(message);
        this.setClearMessage();
    }

    info(message) {
        this.class = 'info';
        this.sendMessage(message);
        this.setClearMessage();
    }

    success(message) {
        this.class = 'success';
        this.sendMessage(message);
        this.setClearMessage();
    }

    setClearMessage() {
        setTimeout(() => this.clearMessage(), this.showTime);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}