Counts the number of an object's keys while ignoring internal runtime keys.

**Supported call styles:**
- Classic: `countKeys(object)` -> returns a number
- Curried: not available (use `pipe(object, O.countKeys)` for composition)

The input object is not mutated.

```ts
{@include object/countKeys/example.ts[3,8]}
```

@remarks
- Filters runtime keys used by the library
- Uses the same semantics as [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

@see https://utils.duplojs.dev/en/v1/api/object/countKeys

@namespace O
