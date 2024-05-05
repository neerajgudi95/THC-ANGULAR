import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5radar from '@amcharts/amcharts5/radar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  isAdminRole = true;
  diskDetails = {
    availableSpace: '45.205078125',
    spaceRemaining: '33.205078125',
  };

  cpuDetails = {
    cpuUsed: 3,
  };

  createChart() {
   
  }

  ngAfterViewInit(): void {
    this.createChart();
  }
}
