import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: any;

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      email: new FormControl('', Validators.required),
      module: new FormControl('', Validators.required),
      commSkills: new FormControl('', Validators.required),
      techSkills: new FormControl('', Validators.required),
      learingAttitude: new FormControl('', Validators.required),
      problemSolving: new FormControl('', Validators.required),
      behavior: new FormControl('', Validators.required),
      recordingLink: new FormControl('', Validators.required),
      // goodObservations: new FormRecord()
      // improvementsRequired: new FormRecord()
    });
  }
}
