import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [ 
      ];
    
    constructor(private httpClient: HttpClient) {}

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

    saveAppareilsToServer() {
        this.httpClient
            .put('https://http-client-demo-e2a22.firebaseio.com/appareils.json', 
                    this.appareils)
            .subscribe(
                () => {
                    console.log('Commit en BDD Ok');
                },
                (error: any) => {
                    console.error('Erreur BDD : ', error);
                }
            );
    }

    getAppareilsFromServer() {
        this.httpClient
            .get<any[]>('https://http-client-demo-e2a22.firebaseio.com/appareils.json')
            .subscribe(
                (response) => {
                    console.log('Select en BDD Ok');
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                (error: any) => {
                    console.error('Erreur BDD : ', error);
                }
            );
    }
}