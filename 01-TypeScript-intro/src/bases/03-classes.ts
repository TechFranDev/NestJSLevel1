// Video 15
// Pueden verse como la representación de un objeto que existe en la vida real

/*  
export class Pokemon {
    public id: number;
    public name: string;

    // Constructor es un metodo especial que se ejecuta cuando se crea una instancia de la clase
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// Porque no crear solo interfaces? Esto porque la clase permite crear instancias de la misma, Interfaces solo para crear reglas y condiciones
// Interfaz no tiene ninguna representacieon en JS, solo en TS

export const pikachu = new Pokemon(4, 'Pikachu');

// Todo lo anterior es una forma implicita de forma explicita

// Existe una forma Corta que es lo mismo
export class PokemonUpdate {
    constructor(public readonly id: number, public name: string) {}
}

export const charmander = new PokemonUpdate(1, 'Charmander');

charmander.id = 2; // Error porque es readonly

// El readonly le quita la forma de establecer un valor a la propiedad
*/

// Video 16: Getters, Metodos y This
