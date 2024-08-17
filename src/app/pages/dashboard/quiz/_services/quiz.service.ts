import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  baseUrl = environment.apiPath;

  constructor(private httpClient: HttpClient) {}

  getQuizModules() {
    return this.httpClient.get(`${this.baseUrl}/getAllModules`).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
