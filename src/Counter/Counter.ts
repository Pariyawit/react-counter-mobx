export interface ICounter {
  add: () => void;
  subtract: () => void;
  count: number;
}

export class Counter implements ICounter {
  counter: number = 0;

  add() {
    this.counter++;
  }
  subtract() {
    this.counter--;
  }
  get count(): number {
    return this.counter;
  }
}
