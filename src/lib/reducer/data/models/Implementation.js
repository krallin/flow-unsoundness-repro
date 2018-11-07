/* @flow */
import type PreparedImplementation from '../../../PreparedImplementation';

export opaque type ImplementationId: string = string;

export type CreateImplementation = {
  preparedImplementation: PreparedImplementation,
};

export type Implementation = {
  id: ImplementationId,
};
