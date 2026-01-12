Repeats a string a number of times.

**Supported call styles:**
- Classic: `repeat(input, count)` → returns a repeated string
- Curried: `repeat(count)` → returns a function waiting for the input

The input string is not mutated.

```ts
{@include string/repeat/example.ts[3,11]}
```

@remarks
- Uses the same semantics as [`String.prototype.repeat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

@see https://utils.duplojs.dev/en/v1/api/string/repeat

@namespace S
