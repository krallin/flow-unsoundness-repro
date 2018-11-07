/* @flow */
import type { ImplementationState } from './models/ImplementationState';

export default class ImplementationStatesIndex {
  static empty(): ImplementationStatesIndex {
    return new ImplementationStatesIndex();
  }

  static fromImplementationStates(
    _: Array<ImplementationState>
  ) {
    return ImplementationStatesIndex.empty()
  }
}
