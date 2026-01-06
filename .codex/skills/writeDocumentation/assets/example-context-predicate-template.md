```ts
import { A, type ExpectType } from "@duplojs/utils";

const input = [
	{
		id: "A1",
		done: true,
	},
	{
		id: "A2",
		done: false,
	},
] as const;

const result = A.filter(
	input,
	(item) => item.done === true,
);
// result: [{ id: "A1", done: true }]

type check = ExpectType<
	typeof result,
	{
		readonly id: "A1";
		readonly done: true;
	}[],
	"strict"
>;
```
