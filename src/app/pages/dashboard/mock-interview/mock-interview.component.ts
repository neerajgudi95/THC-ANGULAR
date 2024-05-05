import { Component } from '@angular/core';
import { dummyFeedbackList } from '../../landing-page/_model/data.model';

@Component({
  selector: 'app-mock-interview',
  templateUrl: './mock-interview.component.html',
  styleUrls: ['./mock-interview.component.css'],
})
export class MockInterviewComponent {
  role: string = 'admin';
  feedbackList = dummyFeedbackList;
}
