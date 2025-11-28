import { unwrap, type ExpectType, E, DP, pipe } from "@duplojs/utils";

interface Schema {
	name: string;
	children?: Schema[];
}

const schema: DP.Contract<Schema> = DP.object({
	name: DP.string(),
	children: pipe(
		DP.lazy(() => schema),
		DP.array,
		DP.optional,
	),
});

const result = schema.parse({
	name: "root",
	children: [{ name: "leaf" }],
});

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		Schema,
		"strict"
	>;
} else {
	const error = unwrap(result);
}
