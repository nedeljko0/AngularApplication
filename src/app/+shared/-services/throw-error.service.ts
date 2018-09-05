import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ThrowErrorService {
  tryAgainLimit: number = 3;
  constructor() {}

  private errorMessage = new BehaviorSubject<string>('');
  currentMessage = this.errorMessage.asObservable();

  changeMessage(message) {
    this.errorMessage.next(message);
  }

  tryAgain(tryNum: number) {
    if (tryNum > 0) {
      tryNum--;
      return true;
    }
  }
}
