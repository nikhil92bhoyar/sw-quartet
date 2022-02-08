export default class Vehicle {
    static properties = {
        length: { label: 'Length', unit: 'm' },
        crew: { label: 'Crew', unit: '' },
        cost: { label: 'Cost', unit: '' },
        pilots: { label: 'Pilots', unit: '' },
        films: { label: 'Films', unit: '' },
    };

    constructor(name, length, crew, cost, pilots, films) {
        this.name = name;
        this.length = length;
        this.crew = crew;
        this.cost = cost;
        this.pilots = pilots;
        this.films = films;
    }
}