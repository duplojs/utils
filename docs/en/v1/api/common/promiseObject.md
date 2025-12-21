---
outline: [2, 3]
prev:
  text: "externalPromise"
  link: "/en/v1/api/common/externalPromise"
next:
  text: "asyncRetry"
  link: "/en/v1/api/common/asyncRetry"
---

# promiseObject

The **`promiseObject()`** function transforms an object of promises (or values) into a promise of a resolved object, keeping keys and precise typing.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/promiseObject/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntax

```typescript
type AwaitedPromiseObject<
	GenericObject extends Record<string, MaybePromise<unknown>>
> = {
	[Prop in keyof GenericObject]: Awaited<GenericObject[Prop]>;
};

function promiseObject<
	GenericInput extends AnyValue,
	GenericObject extends Record<string, MaybePromise<GenericInput>>
>(
	object: GenericObject
): Promise<SimplifyTopLevel<AwaitedPromiseObject<GenericObject>>>;
```

## Parameters

- `object` : Object whose values are promises or direct values.

## Return value

A promise resolved with a typed object containing the resolved values.

## See also

- [`externalPromise`](/en/v1/api/common/externalPromise) - Creates a controllable promise
