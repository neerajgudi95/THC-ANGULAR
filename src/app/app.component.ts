import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'threat-hunters-club';
  isLoggedIn: boolean = false;
  isCollapsed = false;
  currentYear = new Date().getFullYear();
  splunkIcon =
    '<svg width="64px" height="64px" viewBox="-4.8 -4.8 57.60 57.60" xmlns="http://www.w3.org/2000/svg" fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="5.28"></g><g id="SVGRepo_iconCarrier"> <title>splunk</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <path d="M37.5,4h-27A6.5,6.5,0,0,0,4,10.5v27A6.5,6.5,0,0,0,10.5,44h27A6.5,6.5,0,0,0,44,37.5v-27A6.5,6.5,0,0,0,37.5,4ZM33.6,26.1c0,.1,0,.2-.2.3L14.7,35.8c-.1.1-.3-.1-.3-.2V30.8c0-.1,0-.2.1-.2l13.6-6.8L14.5,16.9c-.1,0-.1-.1-.1-.2V11.9c0-.1.2-.3.3-.2l18.7,9.4a.5.5,0,0,1,.2.4Z"></path> </g> </g> </g></svg>';
  assignmentIcon =
    '<svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.552 491.552" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M143.379,204.84h-61.44c-11.311,0-20.48,9.169-20.48,20.48s9.169,20.48,20.48,20.48h61.44 c11.311,0,20.48-9.169,20.48-20.48S154.689,204.84,143.379,204.84z"></path> <path d="M143.379,286.76h-61.44c-11.311,0-20.48,9.169-20.48,20.48s9.169,20.48,20.48,20.48h61.44 c11.311,0,20.48-9.169,20.48-20.48S154.689,286.76,143.379,286.76z"></path> <path d="M143.379,368.68h-61.44c-11.311,0-20.48,9.169-20.48,20.48c0,11.311,9.169,20.48,20.48,20.48h61.44 c11.311,0,20.48-9.169,20.48-20.48C163.859,377.85,154.689,368.68,143.379,368.68z"></path> <path d="M473.543,140.916c-23.993-23.993-62.888-23.993-86.88,0L348.174,179.4v-55.375c0.25-4.199-0.799-8.549-3.433-12.459 c-0.013-0.019-0.024-0.038-0.036-0.057c-0.272-0.401-0.563-0.795-0.869-1.186c-0.052-0.067-0.097-0.138-0.15-0.204l-81.92-102.4 c-0.313-0.391-0.643-0.764-0.981-1.128c-0.147-0.16-0.296-0.316-0.446-0.47c-0.107-0.108-0.217-0.214-0.326-0.32 c-4.34-4.278-9.827-6.056-15.157-5.768H20.495c-11.311,0-20.48,9.169-20.48,20.48v450.56c0,11.311,9.169,20.48,20.48,20.48h307.2 c11.311,0,20.48-9.169,20.48-20.48V353.179l125.369-125.383C497.536,203.804,497.536,164.909,473.543,140.916z M285.087,102.44 h-18.829V78.904L285.087,102.44z M307.215,450.592H40.975v-409.6h184.324v81.928c0,11.311,9.169,20.48,20.48,20.48h61.436v76.952 l-8.968,8.97l-99.856,99.845c-3.236,3.235-5.295,7.461-5.849,12.003l-4.993,40.931l-3.063,25.044 c-1.111,9.083,3.844,17.225,11.344,20.901c3.409,1.673,7.343,2.423,11.472,1.919l65.987-8.049 c4.542-0.554,8.767-2.613,12.003-5.849l21.923-21.925V450.592z M444.58,198.834L313.296,330.131 c-0.027,0.027-0.056,0.05-0.083,0.077l-51.901,51.901l-32.991,4.024l4.034-32.977l94.96-94.977l88.31-88.3 c7.998-7.998,20.958-7.998,28.955-0.001S452.577,190.837,444.58,198.834z"></path> <path d="M210.817,260.282c9.139,9.139,24.353,7.632,31.522-3.121l40.96-61.44c6.274-9.411,3.731-22.127-5.68-28.401 c-9.411-6.274-22.127-3.731-28.401,5.68l-27.103,40.654l-2.815-2.815c-7.998-7.998-20.965-7.998-28.963,0 c-7.998,7.998-7.998,20.965,0,28.963L210.817,260.282z"></path> </g> </g> </g> </g></svg>';
  constructor(private iconService: NzIconService) {
    this.iconService.addIconLiteral('ng-zorro:antd', this.splunkIcon);
    this.iconService.addIconLiteral('ng-zorro:assignment', this.assignmentIcon);
  }
}
