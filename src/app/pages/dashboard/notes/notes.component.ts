import { Component } from '@angular/core';
import { AddNotesRecdsComponent } from '../add-notes-recds/add-notes-recds.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  role: string = 'admin';
  listOfNotes = [
    {
      name: 'Class 1',
      topic: 'Agenda of class 1',
      postedOn: new Date(),
    },
    {
      name: 'Class 2',
      topic: 'HUB',
      postedOn: new Date(),
    },
    {
      name: 'Class 3',
      topic: 'L2 Switch',
      postedOn: new Date(),
    },
  ];

  constructor(private drawer: NzDrawerService) {}

  uploadNotes() {
    this.drawer.create({
      nzTitle: 'Upload Notes',
      nzContent: AddNotesRecdsComponent,
      nzContentParams: {
        type: 'notes',
      },
    });
  }
}
