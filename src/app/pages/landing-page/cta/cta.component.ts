import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent {
  testimonialVideos: any = [
    'https://ik.imagekit.io/fq9vykvp2/Feedback/feedback1?updatedAt=1686468071998',
    'https://res.cloudinary.com/dbs5eaj5e/video/upload/v1686480012/feedback2.mp4',
    'https://res.cloudinary.com/dbs5eaj5e/video/upload/v1686484933/feedback3_b1clb3.mp4',
    'https://res.cloudinary.com/dbs5eaj5e/video/upload/v1686485391/feedback4_qrogv9.mp4',
    'https://res.cloudinary.com/dbs5eaj5e/video/upload/v1686941128/feedback5_pnootw.mp4',
  ];
}
