export interface Pet {
  name: string;
  hunger: number; // 0-100
  happiness: boolean;
  attention: number; // 0-100
  feed: () => void;
  // above is how to describe a method in an interface
  // we only need to describe parameters and return type
  // DO NOT set up the functionality
}
