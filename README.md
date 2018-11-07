This repository attempts to repro what looks like a soundness issue in Flow,
presumably related to a large number of circular dependencies.

The unsoundness is in `src/lib/reducer/data/index.js`:

```js
/* @flow */
import ImplementationStatesIndex from './ImplementationStatesIndex';

function unsound(): string {
  return ImplementationStatesIndex.fromImplementationStates([]);
}
```

`ret` should normally be a `ImplementationStatesIndex`, but here, Flow lets us
return this as a `string`. In fact, Flow's type inference appears to
incorrectly conclude that the type of `ret` is `any`.

There is no warning prompting to add a type annotation to the definition of
`ImplementationStatesIndex` (but doing so fixes the problem).

The issue goes away if we make changes practically anywhere. For example,
remove `PreparedImplementation` and the `PreparedImplementation` import in
`src/lib/reducer/data/models/Implementation.js`:

```js
/* @flow */
export type ImplementationId = string;

export type Implementation = {
  id: ImplementationId,
};
```

Then, this yields the expected issue when running Flow:

```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ src/lib/reducer/data/index.js:6:10

Cannot return ret because ImplementationStatesIndex [1] is incompatible with string [2].

     src/lib/reducer/data/index.js
     3│
 [2] 4│ function unsound(): string {
     5│   const ret = ImplementationStatesIndex.fromImplementationStates([])
     6│   return ret;
     7│ }
     8│

     src/lib/reducer/data/ImplementationStatesIndex.js
 [1] 5│   static empty(): ImplementationStatesIndex {
```
