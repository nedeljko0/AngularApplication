import { Component, OnInit } from '@angular/core';
import { ThrowErrorService } from '../-services/throw-error.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  showError: boolean = false;
  errorMessage: string;
  constructor(private throwErrorMsg: ThrowErrorService) {}

  ngOnInit() {
    this.throwErrorMsg.currentMessage.subscribe((responseMessage: string) => {
      if (responseMessage !== '') {
        this.showError = true;
        this.errorMessage = responseMessage;
        this.hideWarning();
      }
    });
  }

  hideWarning() {
    setTimeout(() => {
      this.errorMessage = '';
      this.showError = false;
    }, 2345);
  }
}
