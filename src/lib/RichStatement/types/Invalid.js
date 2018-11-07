/* @flow */
import { RichInvalidInput } from '../../Input/types/Invalid';

import type { RenderContext } from '../../RenderContext';

export type Invalid = 'invalid';

export class RichInvalid {
  +type: Invalid;
  +cause: RichInvalidInput;

  constructor(cause: RichInvalidInput) {
    this.type = 'invalid';
    this.cause = cause;
  }

  render(ctx: RenderContext) {
    return this.cause.render(ctx);
  }
}

export default { name: 'invalid' };
