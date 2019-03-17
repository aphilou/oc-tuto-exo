import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareils: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const serverDate = new Date();
    setTimeout(
      () => {
        resolve(serverDate);
      }, 2000
    )
  });

  constructor(private appareilService: AppareilService) {
    setTimeout( () => {
      this.isAuth = true;
    }, 2000);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    console.log("On allume tout");
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
