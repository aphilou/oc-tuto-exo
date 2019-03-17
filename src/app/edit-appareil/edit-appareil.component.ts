import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = "éteint";
   
  constructor(private appService: AppareilService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Soumission du formulaire ', form.value);
    const name = form.value['name'];
    const status = form.value['status'];
    this.appService.createAppareil(name, status);
    this.router.navigate(['/appareils']);
  }
}
