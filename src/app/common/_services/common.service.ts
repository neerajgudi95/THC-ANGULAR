import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  signupUrl: string = 'https://threathuntersclub.tech/api/signup';
  loginUrl: string = 'https://threathuntersclub.tech/api/login';
  private loggedIn: boolean = false;

  constructor(private httpClient: HttpClient) {}

  singup(userDetails: any) {
    return this.httpClient.post(this.signupUrl, { body: userDetails }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  login(userDetails: any) {
    return this.httpClient.post(this.loginUrl, { body: userDetails }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }
}
