import { DP, E, unwrap } from "@scripts";

const parser = DP.lazy(() => DP.string());
const result = parser.parse("lazy");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

interface RecursiveSchema {
	value: number;
	next?: RecursiveSchema;
}

const recursive: DP.Contract<RecursiveSchema> = DP.lazy(
	() => DP.object({
		value: DP.number(),
		next: DP.optional(recursive),
	}),
);
const recursiveResult = recursive.parse({
	value: 1,
	next: { value: 2 },
});
