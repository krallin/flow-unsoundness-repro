/* @flow */
import type { ImplementationId } from './Implementation';

export opaque type ImplementationStateId: string = string;

export type ImplementationState = {
  id: ImplementationStateId,
  implementationId: ImplementationId,
};
