```ts
import { N, pipe } from "@scripts";

N.functionName(
	"input",
	"value",
); // "result"

pipe(
	"input",
	N.functionName("value"),
); // "result"

const other = N.functionName(
	"another",
	"value",
); // "result"
```
