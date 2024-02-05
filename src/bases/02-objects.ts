
//arreglos 
export const pokemonIDs = [1,2,3,4];

pokemonIDs.push(33);

// console.log(pokemonIDs);

//objetos

//interfaces

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}
export const bulbasaur: Pokemon = {
     id: 1,
     name: 'bulbasaur',
 }

 console.log(bulbasaur);

