---
outline: [2, 3]
prev:
  text: "concat"
  link: "/en/v1/api/string/concat"
next:
  text: "String"
  link: "/en/v1/api/string/"
---

# isKeyof

The **`isKeyof()`** method checks whether a key exists in an object and narrows the key type accordingly.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/isKeyof/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

### Classic signature

```typescript
function isKeyof<
	GenericObject extends object,
	GenericKey extends ObjectKey
>(
	key: GenericKey,
	obj: GenericObject
): key is keyof GenericObject & GenericKey
```

### Curried signature

```typescript
function isKeyof<
	GenericObject extends object,
	GenericKey extends ObjectKey
>(
	obj: GenericObject
): (key: GenericKey) => key is keyof GenericObject & GenericKey
```

## Parameters

- `key`: The key to check (string, number, or symbol).
- `obj`: The object in which to check for the key's existence.

## Return value

A boolean indicating whether the key exists in the object. The return type uses a conditional type assertion to narrow the type of `key` when the condition is true.

## See also

- [`includes`](/en/v1/api/string/includes) - Checks whether a substring is present
- [`startsWith`](/en/v1/api/string/startsWith) - Checks whether a string starts with a substring
- [`endsWith`](/en/v1/api/string/endsWith) - Checks whether a string ends with a substring

## Sources

- [TypeScript - Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) - Documentation on type guards
