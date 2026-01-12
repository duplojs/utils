Checks whether a key exists on an object.

**Supported call styles:**
- Classic: `isKeyof(key, obj)` → returns a boolean
- Curried: `isKeyof(obj)` → returns a function waiting for the key
- Classic predicate: `isKeyof(key, obj)` → narrows the key type
- Curried predicate: `isKeyof(obj)` → narrows the key type

The input object is not mutated.

```ts
{@include string/isKeyof/example.ts[3,25]}
```

@remarks
- Predicate overloads (type guards) narrow the key type

@see https://utils.duplojs.dev/en/v1/api/string/isKeyof

@namespace S
