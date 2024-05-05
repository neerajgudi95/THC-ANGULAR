import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  leaderboardIcons =
    '<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.5,12h-4a.5.5,0,0,0-.5.5V20H7V12.5A.5.5,0,0,0,6.5,12Z"></path><path d="M14,4H10a.5.5,0,0,0-.5.5V20h5V4.5A.5.5,0,0,0,14,4Z"></path><path d="M21.5,8h-4a.5.5,0,0,0-.5.5V20h5V8.5A.5.5,0,0,0,21.5,8Z"></path></g></svg>';

  constructor(private iconService: NzIconService) {
    this.iconService.addIconLiteral(
      'ng-zorro:leaderboard',
      this.leaderboardIcons
    );
  }
}
