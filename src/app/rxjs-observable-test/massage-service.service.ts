import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

/** The interface for values emitted by the Message Service */
export interface Message {
  type: string;
  text: string;
}

@Injectable({providedIn: 'root'})
export class MessageService {
  // Tip: never expose the Subject itself.
  private messageSubject = new BehaviorSubject<Message>({ type: 'Starting Error', text:'init error' });

  /** Observable of all messages */
  messages$ = this.messageSubject.asObservable();

  /** Add an error message to the Subject */
  addError(text: string) {
    this.messageSubject.next({ type: 'Error', text });
  }

  /** Add a warning message to the Subject */
  addWarning(text: string) {
    this.messageSubject.next({ type: 'Warning', text });
  }
}
