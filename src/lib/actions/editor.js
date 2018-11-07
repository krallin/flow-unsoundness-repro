/* @flow */
import type { RichImplementation } from '../reducer/data/models/RichImplementation';

type RestoreEditorAction = {
  richImplementation: RichImplementation,
};

type DismissEditorAction = {
  richImplementation: RichImplementation,
};

export type Action = RestoreEditorAction | DismissEditorAction;

type A<T> = Action & T;

export function dismissEditor(
  richImplementation: RichImplementation,
): A<DismissEditorAction> {
  return { richImplementation };
}
