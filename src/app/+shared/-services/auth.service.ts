import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = 'B2185B09-C56E-43B2-8945-134748313EC6';
  constructor() {}

  getToken() {
    return this.token;
  }
}
