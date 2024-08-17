import { Component, OnInit } from '@angular/core';
import { QuizService } from './_services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(private quizServ: QuizService) {}

  quizModules: any[] = [];

  getAllModules() {
    this.quizServ.getQuizModules().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  ngOnInit(): void {
    this.getAllModules();
  }
}
