import { AfterViewInit, Component } from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5radar from '@amcharts/amcharts5/radar';

@Component({
  selector: 'app-disk-space-gauge',
  templateUrl: './disk-space-gauge.component.html',
  styleUrls: ['./disk-space-gauge.component.css'],
})
export class DiskSpaceGaugeComponent implements AfterViewInit {
  diskDetails = {
    availableSpace: '45.205078125',
    spaceRemaining: '33.205078125',
  };
  createCpuChart() {
    let diskChart = am5.Root.new('diskChart');
    diskChart._logo?.dispose();
    let chart = diskChart.container.children.push(
      am5radar.RadarChart.new(diskChart, {
        startAngle: 160,
        endAngle: 380,
        radius: am5.percent(100),
        innerRadius: -25,
      })
    );

    // Create axis renderer
    let axisRenderer = am5radar.AxisRendererCircular.new(diskChart, {
      strokeOpacity: 0.1,
      minGridDistance: 30,
    });

    // Enable ticks
    axisRenderer.ticks.template.setAll({
      visible: true,
      strokeOpacity: 0.5,
    });

    let axis = chart.xAxes.push(
      am5xy.ValueAxis.new(diskChart, {
        min: 0,
        max: 45,
        renderer: axisRenderer,
      })
    );

    // Create a range
    this.createRange(0, 20, 0x88e260, axis, 'LOW');
    this.createRange(20, 35, 0xfeb204, axis, 'MODERATE');
    this.createRange(35, 45, 0xd93b18, axis, 'HIGH');

    // Disable grid
    axisRenderer.grid.template.setAll({
      visible: false,
    });

    //hand
    let handDataItem = axis.makeDataItem({
      value: Math.round(+this.diskDetails.spaceRemaining),
    });

    let label = chart.radarContainer.children.push(
      am5.Label.new(diskChart, {
        fill: am5.color(0xffffff),
        centerX: am5.percent(50),
        textAlign: 'center',
        centerY: am5.percent(50),
        fontSize: '1em',
        fontWeight: '700',
      })
    );

    label.set('text', `${Math.round(+this.diskDetails.spaceRemaining)} GB`);
    let clockHand = am5radar.ClockHand.new(diskChart, {
      pinRadius: am5.percent(20),
      radius: am5.percent(85),
      bottomWidth: 15,
    });
    let bullet = handDataItem.set(
      'bullet',
      am5xy.AxisBullet.new(diskChart, {
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
