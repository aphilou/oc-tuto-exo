import { User } from '../model/user.model';
import { Subject } from 'rxjs';

export class UserService {
    
    private users: User[] = [
        {
            firstName: 'Philippe',
            lastName: 'Andre',
            email: 'ap@sfr.fr',
            drinkPreference: 'Bière',
            hobbies: [ 'vélo', 'running', 'console vidéo']
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    createUSer(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}