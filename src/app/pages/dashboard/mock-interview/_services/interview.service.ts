import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  baseUrl = environment.apiPath;
  constructor(private httpClient: HttpClient) {}

  getMockFeedback(email: string) {
    return this.httpClient.get(`${this.baseUrl}/getFeedback/${email}`).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
