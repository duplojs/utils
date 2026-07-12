Creates a checker that enforces a maximum `TheTime` bound.

Signature: `checkerTimeMax(max, definition?)` → `DataParserCheckerTimeMax`

The checker passes when parsed value is less than or equal to `max`.

```ts
{@include dataParser/classic/checkerTimeMax/example.ts[3,10]}
```

@remarks
- Designed to be used in `DP.time({ checkers: [...] })` or via `.addChecker(...)`.

@see https://utils.duplojs.dev/en/v1/api/dataParser/time

@namespace DP
