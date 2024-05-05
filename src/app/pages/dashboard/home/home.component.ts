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
    let root = am5.Root.new('chartdiv');
    root._logo?.dispose()
    let chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        startAngle: -180,
        endAngle: 0,
        radius: am5.percent(80),
        innerRadius: -30,
      })
    );

    // Create axis renderer
    let axisRenderer = am5radar.AxisRendererCircular.new(root, {
      strokeOpacity: 0.1,
      minGridDistance: 30,
    });

    // Enable ticks
    axisRenderer.ticks.template.setAll({
      visible: true,
      strokeOpacity: 0.5,
    });

    

    let axis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 45,
        renderer: axisRenderer,
      })
    );

   
    
    

    

    // Create a range
     this.createRange(0,20,0x297373,axis);
    this.createRange(20,35,0x946B49,axis);
    this.createRange(35,45,0xff621f,axis);
    
    // Disable grid
    axisRenderer.grid.template.setAll({
      visible: false,
    });

    //hand
    let handDataItem = axis.makeDataItem({
      value: 35
    });
    
    let hand = handDataItem.set("bullet", am5xy.AxisBullet.new(root, {
      sprite: am5radar.ClockHand.new(root, {
        radius: am5.percent(99)
      })
    }));
    
    axis.createAxisRange(handDataItem);
  }

  createRange(start:any,end:any,color:any,axis:any,label?:any){
    let rangeDataItem = axis.makeDataItem({
      value: start,
      endValue: end
    });
    
    axis.createAxisRange(rangeDataItem);
  rangeDataItem.get("axisFill")?.setAll({
     visible: true,
      fill:am5.color(color),
      fillOpacity:0.8
    })
  }

  ngAfterViewInit(): void {
    this.createChart();
  }
}
