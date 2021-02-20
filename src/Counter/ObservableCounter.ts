import { action, makeObservable, observable } from 'mobx';
import { Counter } from './Counter';

export class ObservableCounter extends Counter {
  constructor() {
    super();
    makeObservable(this, {
      count: observable,
      add: action,
      subtract: action,
    });
  }
}
