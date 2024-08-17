import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThcService {
  baseUrl = environment.apiPath;

  constructor(private httpClient: HttpClient) {}

  getNotes() {
    return this.httpClient.get(`${this.baseUrl}/getNotes`).pipe(
      map((data) => {
        return data;
      })
    );
  }

  uploadNotes(fileData: any) {
    this.httpClient
      .post(
        `${this.baseUrl}/addNotes/${fileData.fileTopic}/${fileData.fileName}`,
        { body: fileData.formData }
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
  uploadVideo(videoData: any) {
    this.httpClient
      .post(
        `${this.baseUrl}/postVideo/${videoData.videoInstructor}/${videoData.videoTopic}`,
        { body: videoData.videoLink }
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
