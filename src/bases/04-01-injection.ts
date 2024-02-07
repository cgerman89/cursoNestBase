
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";
import { PokeApiAdapter } from "../api/pokeApi.adapter";

export class Pokemon {

    constructor(
        public id: number,
        public name: string,
        private readonly http: PokeApiAdapter
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
        //   const {data} = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4");      
          const data = await this.http.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4");    
          console.log(data.abilities);  
          console.log(data.moves);  
          return data.moves;
    }

}

const pokeapi = new PokeApiAdapter();

export const chamander = new Pokemon(12, 'Charmander', pokeapi);
chamander.getMovies();