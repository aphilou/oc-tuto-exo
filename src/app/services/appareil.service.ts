export class AppareilService {

    appareils = [ 
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Four',
          status: 'allumé'
        },
        {
            name: 'Congélateur',
            status: 'allumé'
        },
        {
          name: 'Frigidaire',
          status: 'allumé'
        }
      ];
    
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