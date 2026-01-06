```ts
import { P, type ExpectType } from "@duplojs/utils";

// Fold the type block in Monaco with foldLines.
type Event =
	| {
		type: "created";
		payload: {
			id: number;
			by: string;
		};
	}
	| {
		type: "deleted";
		id: number;
	};

const input = null as unknown as Event;

P.match(input)
	.with(
		{ type: "created" },
		({ payload }) => {
			type check = ExpectType<
				typeof payload,
				{
					id: number;
					by: string;
				},
				"strict"
			>;
		},
	);
```
