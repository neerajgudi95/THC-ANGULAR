import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { QuizComponent } from './quiz/quiz.component';
import { MockInterviewComponent } from './mock-interview/mock-interview.component';
import { NgAntProviderModule } from 'src/app/ng-ant.module';
import { AlertsComponent } from './alerts/alerts.component';
import { EdrComponent } from './alerts/edr/edr.component';
import { IdsComponent } from './alerts/ids/ids.component';
import { SplunkComponent } from './alerts/splunk/splunk.component';
import { FeedbackItemComponent } from './mock-interview/feedback-item/feedback-item.component';
import { EdrClosedComponent } from './alerts/edr/edr-closed/edr-closed.component';
import { EdrMainComponent } from './alerts/edr/edr-main/edr-main.component';
import { EdrWipComponent } from './alerts/edr/edr-wip/edr-wip.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AddNotesRecdsComponent } from './add-notes-recds/add-notes-recds.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './mock-interview/feedback-form/feedback-form.component';
import { CpuGaugeComponent } from './home/cpu-gauge/cpu-gauge.component';
import { DiskSpaceGaugeComponent } from './home/disk-space-gauge/disk-space-gauge.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NotesComponent,
    RecordingsComponent,
    QuizComponent,
    MockInterviewComponent,
    AlertsComponent,
    EdrComponent,
    IdsComponent,
    SplunkComponent,
    FeedbackItemComponent,
    EdrClosedComponent,
    EdrMainComponent,
    EdrWipComponent,
    AssignmentsComponent,
    LeaderboardComponent,
    AddNotesRecdsComponent,
    FeedbackFormComponent,
    CpuGaugeComponent,
    DiskSpaceGaugeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgAntProviderModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DashboardModule {}
