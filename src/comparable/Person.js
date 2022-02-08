export default class Person {
    static properties = {
        height: { label: 'Size', unit: 'cm' },
        mass: { label: 'Weight', unit: 'kg' },
        films: { label: 'Films', unit: '' },
        starships: { label: 'Starships', unit: '' },
        vehicles: { label: 'Vehicles', unit: '' },
    };

    constructor(name, height, mass, films, starships, vehicles) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.films = films;
        this.starships = starships;
        this.vehicles = vehicles;
    }
}