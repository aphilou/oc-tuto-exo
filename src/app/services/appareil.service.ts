export class AppareilService {

    appareils = [ 
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
    

    getAppareilById(id: number) {
        for (const app of this.appareils) {
            if (app.id === id) {
                return app;
            }
        }
    }

    switchOnAll() {
        for (const app of this.appareils) {
            app.status = 'allumé';
        }
    }

    switchOffAll() {
        for (const app of this.appareils) {
            app.status = 'éteint';
        }
    }

    switchOn(index: number) {
        this.appareils[index].status = 'allumé';
    }

    switchOff(index: number) {
        this.appareils[index].status = 'éteint';
    }
}