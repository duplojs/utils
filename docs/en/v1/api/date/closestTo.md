---
outline: [2, 3]
description: "Finds the date closest to a target within an iterable of TheDate. In case of equality, an optional tieBreaker lets you favor the past or the future."
prev:
  text: "each"
  link: "/en/v1/api/date/each"
next:
  text: "constants"
  link: "/en/v1/api/date/constants"
---

# closestTo

Finds the date closest to a target within an iterable of `TheDate`. In case of equality, an optional `tieBreaker` lets you favor the past or the future.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/date/closestTo/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntax

```typescript
interface ClosestToParams {
	tieBreaker?: "favorPast" | "favorFuture";
}
```

### Classic signature

```typescript
function closestTo<
	GenericIterable extends Iterable<TheDate>
>(
	target: TheDate,
	params?: ClosestToParams
): (input: GenericIterable) => TheDate | undefined
```

### Curried signature

```typescript
function closestTo<
	GenericIterable extends Iterable<TheDate>
>(
	input: GenericIterable,
	target: TheDate,
	params?: ClosestToParams
): TheDate | undefined
```

## Parameters

- `target`: Target date.
- `input`: Iterable of `TheDate`.
- `tieBreaker`: (Optional) Handles ties (`favorPast` by default).

## Return value

The closest `TheDate`, or `undefined` if the iterable is empty.

## See also

- [`each`](/en/v1/api/date/each)
- [`round`](/en/v1/api/date/round)
