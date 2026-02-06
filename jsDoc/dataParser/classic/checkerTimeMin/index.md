Creates a checker that enforces a minimum `TheTime` bound.

Signature: `checkerTimeMin(min, definition?)` → `DataParserCheckerTimeMin`

The checker passes when parsed value is greater than or equal to `min`.

```ts
{@include dataParser/classic/checkerTimeMin/example.ts[3,13]}
```

@remarks
- Designed to be used in `DP.time({ checkers: [...] })` or via `.addChecker(...)`.

@see https://utils.duplojs.dev/en/v1/api/dataParser/time

@namespace DP
