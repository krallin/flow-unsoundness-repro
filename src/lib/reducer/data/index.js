/* @flow */
import ImplementationStatesIndex from './ImplementationStatesIndex';

function unsound(): string {
  const ret = ImplementationStatesIndex.fromImplementationStates([])
  return ret;
}
