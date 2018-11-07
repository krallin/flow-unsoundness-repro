/* @flow  */
import type { EditorSelector } from '../reducer/editor/state';

type RestoreEditorAction = {
  editorSelector: EditorSelector,
};

type DismissEditorAction = {
  editorSelector: EditorSelector,
};

export type Action = RestoreEditorAction | DismissEditorAction;

type A<T> = Action & T;

export function dismissEditor(
  editorSelector: EditorSelector,
): A<DismissEditorAction> {
  return { editorSelector };
}
