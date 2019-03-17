import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string;
  status = "unknown";
  appareil: any;

  constructor(private appService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.appareil = this.appService.getAppareilById(+id);
    this.name = this.appareil.name;
    this.status = this.appareil.status;
  }

}
