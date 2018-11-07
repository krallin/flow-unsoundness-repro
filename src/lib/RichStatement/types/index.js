/* @flow */
import InvalidType, { type RichInvalid } from './Invalid';

export type StatementType =
  | typeof InvalidType;

export type RichStatement =
  | RichInvalid;
