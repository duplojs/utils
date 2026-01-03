Groups elements into an object by a group name.

**Supported call styles:**
- Classic: `group(array, theFunction)` → returns a grouped object
- Curried: `group(theFunction)` → returns a function waiting for the array

The function receives `(element, { index, output })`, where `output` is `groupOutput`.
The input array is not mutated.


```ts
{@include array/group/example.ts[3,19]}
```

@see [`A.groupOutput`](https://utils.duplojs.dev/en/v1/api/array/groupOutput) For creating group outputs
@see https://utils.duplojs.dev/en/v1/api/array/group

@namespace A
