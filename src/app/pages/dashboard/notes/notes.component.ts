import { Component, OnInit } from '@angular/core';
import { AddNotesRecdsComponent } from '../add-notes-recds/add-notes-recds.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { ThcService } from '../_services/thc.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  role: string = 'admin';
  listOfNotes: any[] = [];

  constructor(
    private drawer: NzDrawerService,
    private thcService: ThcService
  ) {}

  getAllNotes() {
    this.thcService.getNotes().subscribe({
      next: (res: any) => {
        console.log(res);
        this.listOfNotes = res;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  uploadNotes() {
    this.drawer.create({
      nzTitle: 'Upload Notes',
      nzContent: AddNotesRecdsComponent,
      nzContentParams: {
        type: 'notes',
      },
    });
  }

  ngOnInit(): void {
    this.getAllNotes();
  }
}
