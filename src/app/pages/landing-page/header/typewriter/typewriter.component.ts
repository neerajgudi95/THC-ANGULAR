import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css'],
})
export class TypewriterComponent implements OnInit {
  typewriter_text: string = 'Thank you for your interest';
  typewriter_display: string = '';
  currentSentenceIndex = 0;
  currentText = '';
  currentIndex = 0;
  typingSpeed = 150;

  sentences = [
    'Security Operations.',
    'Malware Analysis.',
    'Email Security.',
    'Threat Hunting.',
    'Network Penetration Testing.',
    'handling security incidents.',
  ];

  typingCallback() {
    const sentence = this.sentences[this.currentSentenceIndex];
    if (this.currentIndex < sentence.length) {
      this.currentText += sentence.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typingCallback(), this.typingSpeed);
    } else {
      // Move to the next sentence or loop back to the first sentence
      this.currentIndex = 0;
      this.currentSentenceIndex =
        (this.currentSentenceIndex + 1) % this.sentences.length;
      this.currentText = '';
      setTimeout(() => this.typingCallback(), this.typingSpeed * 4); // Delay before typing the next sentence
    }
  }

  ngOnInit() {
    this.typingCallback();
  }
}
