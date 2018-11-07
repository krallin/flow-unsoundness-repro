/* @flow */
import type { State as EditorState } from './editor/state';

type CrumbsState = any;

export type State = $ReadOnly<{
  editor: EditorState,
  crumbs: CrumbsState,
}>;
