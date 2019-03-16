import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  
  @Input() appName : string;
  @Input() appStatus : string;
  @Input() indexOfAppareil: string;

  constructor() { }

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
}
