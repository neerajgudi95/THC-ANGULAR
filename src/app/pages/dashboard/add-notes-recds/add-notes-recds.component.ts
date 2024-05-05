import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-notes-recds',
  templateUrl: './add-notes-recds.component.html',
  styleUrls: ['./add-notes-recds.component.css'],
})
export class AddNotesRecdsComponent implements OnInit {
  @Input() type: string = '';

  uploadForm: any;

  createNotesForm() {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      topic: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
    });
  }

  createRecordingsForm() {
    return new FormGroup({
      topic: new FormControl(null, Validators.required),
      instructor: new FormControl(null, Validators.required),
      link: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    if (this.type == 'notes') {
      this.uploadForm = this.createNotesForm();
    }

    if (this.type == 'recordings') {
      this.uploadForm = this.createRecordingsForm();
    }
  }
}
