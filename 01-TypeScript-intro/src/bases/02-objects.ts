export const pokemonsIds = [1, 43, 56, 78, 21, 77];

// pokemonsIds.push(`hola`);
// Esto realiza una conversión a número
// pokemonsIds.push(+'1');

// console.log(pokemonsIds);

// Objetos literales
export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    // type: 'Grass',
    // baseExperience: 64,
};

console.log(bulbasaur);

// Para que un object luzca de manera más ordenada se define una interfaz
interface Pokemon {
    id: number;
    name: string;
    type?: string;
}

// La interfaz no crea una instancia de un objeto, solo es una guía para definir la estructura de un objeto
// const charmander = new Pokemon() No se puede

// ARREGLOS
export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur);
