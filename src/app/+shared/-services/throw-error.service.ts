import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ThrowErrorService {
  constructor() {}

  private errorMessage = new BehaviorSubject<string>('');
  currentMessage = this.errorMessage.asObservable();

  changeMessage(message) {
    this.errorMessage.next(message);
  }
}
