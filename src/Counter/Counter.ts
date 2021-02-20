import { ICounter } from './ICounter';

export class Counter implements ICounter {
  count: number = 0;

  add() {
    this.count++;
  }

  subtract() {
    this.count--;
  }
}
