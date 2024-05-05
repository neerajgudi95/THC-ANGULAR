import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AddNotesRecdsComponent } from '../add-notes-recds/add-notes-recds.component';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.css'],
})
export class RecordingsComponent {
  listOfRecordings = [
    {
      topic: 'Introduction to Networks and cybersecurity',
      instructor: 'Nikhil Inganal',
      postedOn: new Date(),
    },
    {
      topic: 'Deep dive on network devices part 1',
      instructor: 'Nikhil Inganal',
      postedOn: new Date(),
    },
    {
      topic: 'Deep dive on network devices part 2',
      instructor: 'Nikhil Inganal',
      postedOn: new Date(),
    },
  ];

  constructor(private drawer: NzDrawerService) {}

  uploadRecordings() {
    this.drawer.create({
      nzTitle: 'Upload Recordings',
      nzContent: AddNotesRecdsComponent,
      nzContentParams: {
        type: 'recordings',
      },
    });
  }
}
