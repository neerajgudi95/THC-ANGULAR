import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdrComponent } from './alerts/edr/edr.component';
import { IdsComponent } from './alerts/ids/ids.component';
import { SplunkComponent } from './alerts/splunk/splunk.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MockInterviewComponent } from './mock-interview/mock-interview.component';
import { NotesComponent } from './notes/notes.component';
import { QuizComponent } from './quiz/quiz.component';
import { RecordingsComponent } from './recordings/recordings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'recordings', component: RecordingsComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'mock-interview', component: MockInterviewComponent },
      { path: 'assignments', component: AssignmentsComponent },
      { path: 'leaderboard', component: LeaderboardComponent },
      {
        path: 'alerts',
        children: [
          { path: 'edr', component: EdrComponent },
          { path: 'ids', component: IdsComponent },
          { path: 'splunk', component: SplunkComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
