import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css'],
})
export class FeedbackItemComponent {
  @Input() feedbackItem: any;

  progressFormat = (skill: number): string => `${skill / 10}/10`;
}
