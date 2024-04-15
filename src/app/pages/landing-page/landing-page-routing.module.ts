import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CyberSecInfoComponent } from './cyber-sec-info/cyber-sec-info.component';
import { GoalsComponent } from './goals/goals.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    children: [
      { path: 'home', component: MainComponent },
      { path: 'cyber-security', component: CyberSecInfoComponent },
      { path: 'our-goals', component: GoalsComponent },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'course-details',
        component: TimelineComponent,
      },
      { path: 'gallery', component: GalleryComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
