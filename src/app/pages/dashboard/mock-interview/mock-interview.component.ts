import { Component, OnInit } from '@angular/core';
import { dummyFeedbackList } from '../../landing-page/_model/data.model';
import { InterviewService } from './_services/interview.service';

@Component({
  selector: 'app-mock-interview',
  templateUrl: './mock-interview.component.html',
  styleUrls: ['./mock-interview.component.css'],
})
export class MockInterviewComponent implements OnInit {
  role: string = 'member';
  feedbackList: any[] = [];
  email = 'ngudi007@gmail.com';

  constructor(private intService: InterviewService) {}

  getFeedbackList() {
    this.intService.getMockFeedback(this.email).subscribe({
      next: (res: any) => {
        this.feedbackList = res;
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  ngOnInit(): void {
    this.getFeedbackList();
  }
}
