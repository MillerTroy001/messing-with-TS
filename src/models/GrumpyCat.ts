import { Cat } from "./Cat";

export class GrumpyCat extends Cat {
  happiness: boolean = false;
  pet(): void {
    console.log(`hissss`);
  }
  breakThings(): void {
    this.hunger += 50;
    this.attention -= 50;
    console.log(`kaboom`);
  }
}
