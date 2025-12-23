---
outline: [2, 3]
prev:
  text: "forwardLog"
  link: "/en/v1/api/common/forwardLog"
next:
  text: "when"
  link: "/en/v1/api/common/when"
---

# justReturn

The **`justReturn()`** function builds a constant function: it ignores its argument and always returns the same value. It also exists in direct form to immediately return that value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/justReturn/tryout.doc.ts"
  majorVersion="v1"
  height="730px"
/>

## Syntax

### Classic signature

```typescript
function justReturn<
	GenericInput extends unknown, 
	GenericInput extends AnyValue
>(
	input: GenericInput, 
	input: GenericInput
): GenericInput;
```

### Curried signature

```typescript
function justReturn<
	GenericInput extends unknown, 
	GenericInput extends AnyValue
>(
	input: GenericInput
): (input: GenericInput) => GenericInput;
```

## Parameters

- `input` : The constant value to return.
- `input` (direct overload) : A value ignored, useful to stay compatible with callbacks.

## Return value

- Curried overload: a function that always returns `input` regardless of the argument received.
- Direct overload: the value `input`.

## See also

- [`forward`](/en/v1/api/common/forward) - Simple identity
- [`pipe`](/en/v1/api/common/pipe) - Chain transformations and insert `justReturn` as a fallback
