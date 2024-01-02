import { Tamagotchi } from "./Tamagotchi";

export class Wawatchi extends Tamagotchi {
  favoriteFood: string = "astronaut food";
  readonly happiness: boolean = false;
  feed(): void {
    this.hunger -= 15;
    console.log("thanks for the astronaut food!");
  }
  cry(): void {
    console.log("tears");
  }
}
