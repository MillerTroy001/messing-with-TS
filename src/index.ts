import { Cat } from "./models/Cat";
import { GrumpyCat } from "./models/GrumpyCat";
import { Pet } from "./models/Pets";
import { Tamagotchi } from "./models/Tamagotchi";
import { Wawatchi } from "./models/Wawatchi";

const troysPet: Pet = {
  name: "Jamous",
  hunger: 30,
  happiness: false,
  attention: 90,
  feed() {
    this.hunger -= 30;
  },
};

const eriksPet: Pet = {
  name: "Gus",
  hunger: 30,
  happiness: true,
  attention: 50,
  feed() {
    this.hunger -= 20;
  },
};

const myTamagotchi: Tamagotchi = new Tamagotchi("sushi");
const eeyore: Wawatchi = new Wawatchi("Eeyore");
const cat1: Cat = new Cat("Moses", 50, 70, true);
const cat2: GrumpyCat = new GrumpyCat("Cleo", 20, 80);

const allThePets: Pet[] = [troysPet, eriksPet, myTamagotchi, eeyore];
const cats: Cat[] = [cat1, cat2];

const feedPets = (arrayOfPets: Pet[]): void => {
  arrayOfPets.forEach((pet) => {
    pet.feed();
  });
};

console.log(allThePets);

feedPets(allThePets);
feedPets(cats);

console.log(allThePets);

const playWithCats = (catArray: Cat[]): void => {
  catArray.forEach((cat) => {
    cat.fetchHairTie;
    cat.breakThings();
  });
};

playWithCats(cats);

//Polymorphism
// a class can exist within the same places that their perant class / interface can exist
