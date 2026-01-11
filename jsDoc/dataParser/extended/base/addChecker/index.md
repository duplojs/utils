The addChecker() method returns a new extended data parser with one or more additional checkers appended.

**Supported call styles:**
- Method: `dataParser.addChecker(checker1, checker2)` -> returns a new parser

Checkers are executed after the parser core logic, the original parser is not mutated, and the extended methods remain available.

```ts
{@include dataParser/extended/base/addChecker/example.ts[3,13]}
```

@remarks 
- In the extended version, validators already expose their own built-in checkers. Before using `addChecker()`, check whether the schema already provides the equivalent method (e.g. prefer `.min()` over `checkerStringMin()`).

@namespace DPE
