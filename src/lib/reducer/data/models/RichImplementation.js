/* @flow */
import type ImplementationStatesIndex from '../ImplementationStatesIndex';

export type RichImplementationId = string;

export type RichImplementation = {
  id: RichImplementationId,
  implementationStates: ImplementationStatesIndex,
};
