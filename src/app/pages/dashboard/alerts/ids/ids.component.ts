import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { idsAlerts } from 'src/app/pages/landing-page/_model/data.model';

@Component({
  selector: 'app-ids',
  templateUrl: './ids.component.html',
  styleUrls: ['./ids.component.css'],
})
export class IdsComponent {
  idsAlerts = idsAlerts;
  VTURL = 'https://www.virustotal.com/gui/file';
  expandSet = new Set<number>();

  virusTotal =
    '<svg fill="#0a1bff" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#0a1bff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>VirusTotal icon</title><path d="M10.87 12L0 22.68h24V1.32H0zm10.73 8.52H5.28l8.637-8.448L5.28 3.48H21.6z"></path></g></svg>';

  constructor(private iconService: NzIconService) {
    this.iconService.addIconLiteral('ng-zorro:virus-total', this.virusTotal);
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  openVirusTotal(hash: any) {
    console.log(hash);
    window.open(`${this.VTURL}/${hash}`, '_blank');
  }

  getTagColor(severity: string): string {
    let color = '';
    if (severity.toLowerCase() == 'low') {
      color = 'lime';
    }
    if (severity.toLowerCase() == 'high') {
      color = 'red';
    }
    if (severity.toLowerCase() == 'medium') {
      color = 'gold';
    }

    return color;
  }
}
