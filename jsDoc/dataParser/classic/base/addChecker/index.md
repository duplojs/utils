The addChecker() method returns a new data parser with one or more additional checkers appended.

**Supported call styles:**
- Method: `dataParser.addChecker(checker1, checker2)` -> returns a new parser

Checkers are executed after the parser core logic, and the original parser is not mutated.

```ts
{@include dataParser/classic/base/addChecker/example.ts[3,13]}
```

@namespace DP
