import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: any;

  constructor(private fb: FormBuilder) {}

  addField(type: string): void {
    if (type == 'improv') {
      this.improvementsArray.push(new FormControl('', Validators.required));
    }
    if (type == 'observ') {
      this.observationsArray.push(new FormControl('', Validators.required));
    }
  }

  removeField(i: any, type: string): void {
    if (type == 'improv') {
      this.improvementsArray.removeAt(i);
    }
    if (type == 'observ') {
      this.observationsArray.removeAt(i);
    }
  }

  get observationsArray() {
    return this.feedbackForm.get('goodObservations') as FormArray;
  }

  get improvementsArray() {
    return this.feedbackForm.get('improvementsRequired') as FormArray;
  }

  observationControls() {
    return (this.feedbackForm.get('goodObservations') as FormArray).controls;
  }

  improvementControls() {
    return (this.feedbackForm.get('improvementsRequired') as FormArray)
      .controls;
  }

  submitForm(): void {
    console.log(this.feedbackForm.value);
  }

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
      goodObservations: this.fb.array([]),
      improvementsRequired: this.fb.array([]),
    });

    this.addField('improv');
    this.addField('observ');
  }
}
