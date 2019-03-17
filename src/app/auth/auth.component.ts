import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authSerice: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authSerice.isAuth;
  }

  onSignIn() {
    this.authSerice.signIn().then(
      (result) => {
        console.log("Connexion réussie: ", result);
        this.authStatus = this.authSerice.isAuth;
        this.router.navigate( ['appareils']);
      }
    )
  }

  onSignOut() {
    this.authSerice.signOut();
    this.authStatus = this.authSerice.isAuth;
  }
}
