/* @flow */
import type { ImplementationId } from './Implementation';

export type ImplementationStateId = string;

export type ImplementationState = {
  id: ImplementationStateId,
  implementationId: ImplementationId,
};
