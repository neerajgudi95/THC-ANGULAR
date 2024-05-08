import { AfterViewInit, Component } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5radar from '@amcharts/amcharts5/radar';

@Component({
  selector: 'app-cpu-gauge',
  templateUrl: './cpu-gauge.component.html',
  styleUrls: ['./cpu-gauge.component.css'],
})
export class CpuGaugeComponent implements AfterViewInit {
  cpuDetails = {
    cpuUsed: 3,
  };

  createCpuChart() {
    let root = am5.Root.new('chartdiv');
    root._logo?.dispose();
    let chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        startAngle: 160,
        endAngle: 380,
        radius: am5.percent(80),
        innerRadius: -30,
      })
    );

    // Create axis renderer
    let axisRenderer = am5radar.AxisRendererCircular.new(root, {
      strokeOpacity: 1,
      minGridDistance: 30,
      innerRadius: -10,
      strokeWidth: 15,
      strokeGradient: am5.LinearGradient.new(root, {
        rotation: 0,
        stops: [
          { color: am5.color(0xabcdef) },
          { color: am5.color(0x6e97da) },
          { color: am5.color(0x476fc2) },
          { color: am5.color(0x2e48a7) },
          { color: am5.color(0x1a1e75) },
        ],
      }),
    });

    // Enable ticks
    axisRenderer.ticks.template.setAll({
      visible: true,
      strokeOpacity: 0.5,
    });

    let axis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 100,
        renderer: axisRenderer,
      })
    );

    // Create a range
    // this.createRange(0, 20, 0x88e260, axis, 'LOW');
    // this.createRange(20, 35, 0xfeb204, axis, 'MODERATE');
    // this.createRange(35, 45, 0xd93b18, axis, 'HIGH');

    // Disable grid
    axisRenderer.grid.template.setAll({
      visible: false,
    });

    //hand
    let handDataItem = axis.makeDataItem({
      value: this.cpuDetails.cpuUsed,
    });

    let label = chart.radarContainer.children.push(
      am5.Label.new(root, {
        fill: am5.color(0xffffff),
        centerX: am5.percent(50),
        textAlign: 'center',
        centerY: am5.percent(50),
        fontSize: '1.2em',
      })
    );

    label.set('text', `${this.cpuDetails.cpuUsed}%`);
    let clockHand = am5radar.ClockHand.new(root, {
      pinRadius: am5.percent(15),
      radius: am5.percent(85),
      bottomWidth: 10,
    });
    let bullet = handDataItem.set(
      'bullet',
      am5xy.AxisBullet.new(root, {
        sprite: clockHand,
      })
    );
    bullet.get('sprite').on('rotation', function () {
      let value = handDataItem.get('value')!;
      let fill = am5.color(0x000000);
      axis.axisRanges.each(function (axisRange: any) {
        if (
          value >= axisRange.get('value') &&
          value <= axisRange.get('endValue')
        ) {
          fill = axisRange.get('axisFill').get('fill');
        }
      });
      clockHand.pin.animate({
        key: 'fill',
        to: fill,
        duration: 500,
        easing: am5.ease.out(am5.ease.cubic),
      });
      clockHand.hand.animate({
        key: 'fill',
        to: fill,
        duration: 500,
        easing: am5.ease.out(am5.ease.cubic),
      });
    });
    axis.createAxisRange(handDataItem);
  }

  createRange(start: any, end: any, color: any, axis: any, label?: any) {
    let rangeDataItem = axis.makeDataItem({
      value: start,
      endValue: end,
    });

    axis.createAxisRange(rangeDataItem);
    rangeDataItem.get('axisFill')?.setAll({
      visible: true,
      fill: am5.color(color),
      fillOpacity: 0.8,
    });
    rangeDataItem.get('label').setAll({
      text: label,
      inside: true,
      radius: 8,
      fontSize: '0.9em',
      fill: am5.color(0xffffff),
    });
  }

  ngAfterViewInit(): void {
    this.createCpuChart();
  }
}
