export default class Starship {
    static properties = {
        length: { label: 'Length', unit: 'm' },
        crew: { label: 'Crew', unit: '' },
        cargoCapactiy: { label: 'Capacity', unit: '' },
        pilots: { label: 'Pilots', unit: '' },
        films: { label: 'Films', unit: '' },
    };

    constructor(name, length, crew, cargoCapacity, pilots, films) {
        this.name = name;
        this.length = length;
        this.crew = crew;
        this.cargoCapactiy = cargoCapacity;
        this.pilots = pilots;
        this.films = films;
    }
}