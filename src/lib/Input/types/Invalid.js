/* @flow */
import type { RenderContext } from '../../RenderContext';

export type Invalid = 'invalid';

export class RichInvalidInput {
  +type: Invalid;

  constructor() {
    this.type = 'invalid';
  }

  render(_: RenderContext) {
    return null;
  }
}

export default { name: 'invalid' };
