/* @flow */
import type { RichImplementation } from '../data/models/RichImplementation';

import type { Action } from '../../actions/editor';

export type EditorSelector = State => mixed;

export type State = {
  richImplementation: RichImplementation,
  undoStack: Array<Action>
};
