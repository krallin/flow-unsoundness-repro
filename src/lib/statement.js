/* @flow */
import type { State } from './reducer/editor/state';

type Foo = mixed;

export type Statement = {
  makeFoo(state: State): Foo;
}
