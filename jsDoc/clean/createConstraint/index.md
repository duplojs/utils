Creates a constraint handler to enforce a rule on a primitive.

**Supported call styles:**
- Classic: `createConstraint(name, primitive, checker)` -> returns a handler

Constraints cover rules that typing cannot express (format, range, custom checks). The handler validates input, tags the value with the constraint name, and can be reused as a contract or plugged into a NewType.

```ts
{@include clean/createConstraint/example.ts[3,30]}
```

@remarks
- You can pass multiple DataParser checkers by providing an array.
- The handler accepts both raw values and primitive values.

@see https://utils.duplojs.dev/en/v1/api/clean/constraints

@namespace C
