import { Component, OnInit } from '@angular/core';
import GLOBE from 'vanta/dist/vanta.globe.min';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    GLOBE({
      el: '#globe',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 100.0,
      minWidth: 100.0,
      scale: 1.0,
      scaleMobile: 0.3,
      color: 0x0002a1,
      size: 1.5,
      backgroundColor: 0x040c18,
    });
  }
}
