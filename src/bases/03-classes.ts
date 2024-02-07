//esto sirve para definir una clase tanto en TS como en JS
export class Pokemon {
//    public id: number;
//    public name: string;

//    constructor(id: number, name: string){
//          this.id = id;
//          this.name = name;
//          console.log("constructort llamado")
//    }

//   constructor(
//     public id: number,
//     public name: string
//   ){}  
  
  constructor(
    public readonly id: number,
    public name: string
  ){}

  get imageURL(): string{
    return `https://pokemon.com/${ this.id }.jpg`;
  }

  scream(){
    console.log(` ${ this.name.toUpperCase() } !!! `);
  }

  speak(){
    console.log(` ${ this.name }, ${ this.name } `);
  }
 
}

export const objpokemon = new Pokemon(12, "pikachu");

// objpokemon.id = 24;

console.log(objpokemon);

objpokemon.scream();
objpokemon.speak();