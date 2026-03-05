Checks whether two dates point to the same timestamp.

**Supported call styles:**
- Classic: `equal(first, second)` -> `boolean`
- Curried: `equal(second)` -> `(first) => boolean`

All parameters accept `TheDate` or `SerializedTheDate`.

```ts
{@include date/equal/example.ts[3,11]}
```

@remarks
- Equality is based on normalized timestamps.

@see [`D.greater`](https://utils.duplojs.dev/en/v1/api/date/greater) For inclusive greater-than comparison
@see [`D.less`](https://utils.duplojs.dev/en/v1/api/date/less) For inclusive less-than comparison
@see https://utils.duplojs.dev/en/v1/api/date/equal

@namespace D
