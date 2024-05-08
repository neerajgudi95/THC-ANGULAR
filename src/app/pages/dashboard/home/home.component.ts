import { Component } from '@angular/core';
import { processDetails } from '../../landing-page/_model/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isAdminRole = true;
  diskDetails = {
    availableSpace: '45.205078125',
    spaceRemaining: '33.205078125',
  };
  processDetails = processDetails;
}
