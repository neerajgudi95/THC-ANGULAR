import { Component } from '@angular/core';
import {
  firstMonthCourseDetails,
  secondMonthCourseDetails,
  thirdMonthCourseDetails,
} from '../_model/data.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent {
  selectedMonth: string = 'first';
  firstMonthTimeline: any = firstMonthCourseDetails;
  secondMonthTimeline: any = secondMonthCourseDetails;
  thirdMonthTimeline: any = thirdMonthCourseDetails;
}
