The memoObject() function lazily evaluates a getter, memoizes the returned object, and exposes it through a proxy.

Call style: direct call (`memoObject(getter)`).

Reads and writes go through the same memoized object.

```ts
{@include common/memoObject/example.ts[3,17]}
```

@see https://utils.duplojs.dev/en/v1/api/common/memoObject
