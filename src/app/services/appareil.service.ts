import { Subject } from 'rxjs';

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [ 
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Four',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Congélateur',
            status: 'allumé'
        },
        {
            id: 4,
            name: 'Frigidaire',
            status: 'allumé'
        }
      ];
    
    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }

    getAppareilById(id: number) {
        for (const app of this.appareils) {
            if (app.id === id) {
                return app;
            }
        }
        this.emitAppareilSubject();
    }

    switchOnAll() {
        for (const app of this.appareils) {
            app.status = 'allumé';
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (const app of this.appareils) {
            app.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOn(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }

    switchOff(index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }

    createAppareil(name: string, status: string) {
        const appareilToAdd = {
            name: '?',
            status: 'éteint',
            id: -1
        }
        appareilToAdd.name = name;
        appareilToAdd.status = status;
        appareilToAdd.id = this.appareils.length + 1;
        this.appareils.push(appareilToAdd);
        this.emitAppareilSubject();
    }
}