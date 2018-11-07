/* @flow */
import type { State } from './reducer/editor/state';

type Foo = mixed;

export interface Statement {
  makeFoo(State): Foo;
}
