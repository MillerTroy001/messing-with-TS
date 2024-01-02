import { Pet } from "./Pets";

export class Cat implements Pet {
  name: string;
  hunger: number; // 0-100
  happiness: boolean;
  attention: number; // 0-100
  constructor(
    catsName: string,
    hunger: number,
    attention: number,
    happiness: boolean = false // can set default valuse here, must be last listed
  ) {
    this.name = catsName;
    this.hunger = hunger;
    this.happiness = happiness;
    this.attention = attention;
  }
  feed(): void {
    this.hunger -= 20;
    console.log(`meow`);
  }
  fetchHairTie(): void {
    this.attention += 20;
  }
  breakThings(): void {
    console.log(`crash`);
    this.hunger += 20;
    this.attention -= 20;
  }
}
