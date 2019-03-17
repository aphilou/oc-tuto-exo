import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit,OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private usrService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.usrService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.usrService.emitUsers();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSubscription.unsubscribe();
  }
}
