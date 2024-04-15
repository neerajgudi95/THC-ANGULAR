import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TypewriterComponent } from './header/typewriter/typewriter.component';
import { CyberSecInfoComponent } from './cyber-sec-info/cyber-sec-info.component';
import { GoalsComponent } from './goals/goals.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CtaComponent } from './cta/cta.component';
import { PossibilitiesComponent } from './possibilities/possibilities.component';
import { NgAntProviderModule } from 'src/app/ng-ant.module';
import { FeatureComponent } from './cyber-sec-info/feature/feature.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    TypewriterComponent,
    CyberSecInfoComponent,
    GoalsComponent,
    CoursesComponent,
    GalleryComponent,
    AboutUsComponent,
    CtaComponent,
    PossibilitiesComponent,
    FeatureComponent,
    TimelineComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgAntProviderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LandingPageModule {}
