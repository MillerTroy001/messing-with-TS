import { Pet } from "./Pets";

// this class needs to be described by this interface
export class Tamagotchi implements Pet {
  name: string;
  hunger: number = 0;
  happiness: boolean = true;
  attention: number = 80;
  constructor(newName: string) {
    this.name = newName;
  }
  feed(): void {
    this.hunger -= 10;
  }
  play(): void {
    this.attention += 10;
    this.hunger += 10;
  }
  grow(): void {
    this.attention -= 25;
    this.hunger += 50;
  }
  checkHealth(): string {
    // all of the "\n are line breaks"
    return `${this.name}'s current health: \n
    - hunger: ${this.hunger}/100 \n
    - attention: ${this.attention}/100 \n
    - happiness: ${this.happiness}
    `;
  }
}
