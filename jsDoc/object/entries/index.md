Returns object entries as key-value pairs.

Signature: `entries(object)` → returns entries

The input object is not mutated.

```ts
{@include object/entries/example.ts[3,14]}
```

@remarks
- Filters runtime keys used by the library
- Uses the same semantics as [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

@see https://utils.duplojs.dev/en/v1/api/object/entries

@namespace O
