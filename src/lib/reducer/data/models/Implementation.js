/* @flow */
import type PreparedImplementation from '../../../PreparedImplementation';

export type ImplementationId = string;

export type CreateImplementation = {
  preparedImplementation: PreparedImplementation,
};

export type Implementation = {
  id: ImplementationId,
};
