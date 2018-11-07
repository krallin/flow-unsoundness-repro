/* @flow */
import type ImplementationStatesIndex from '../ImplementationStatesIndex';

export opaque type RichImplementationId: string = string;

export type RichImplementation = {
  id: RichImplementationId,
  implementationStates: ImplementationStatesIndex,
};
