import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  
  @Input() appName : string;
  @Input() appStatus : string;
  @Input() indexOfAppareil: number;

  constructor(private appService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appStatus;
  }

  getColor() {
    if (this.appStatus === 'éteint') {
      return 'red';
    } else {
      return 'green';
    }
  }

  onSwitchOn() {
    this.appService.switchOn(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.appService.switchOff(this.indexOfAppareil);
  }
}
