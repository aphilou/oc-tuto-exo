import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number;

  constructor() {}

  ngOnInit(): void {
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error: any) => {
        console.error('Erreur détectée: ', error);
      },
      () => {
        console.log('Observable counter terminé !');
      }
    )
  }

}
