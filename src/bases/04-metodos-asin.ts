import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {

    constructor(
        public id: number,
        public name: string
    ){}

    //get
    get imagesURL(){
        return `https://pokemon.com/${ this.id }`;
    }

    //metodos
    scream(){
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak(){
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMovies(): Promise<Move[]>{
    //    const moves = 10;
          const {data} = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4");      
          console.log(data.moves[0].move.url);
          return data.moves;
    }

}

export const chamander = new Pokemon(12, 'Charmander');
// console.log( chamander.getMovies() );
chamander.getMovies();