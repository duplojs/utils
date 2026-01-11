import { DP, E, unwrap } from "@scripts";

const base = DP.object({
	id: DP.number(),
});

const extended = DP.extends(base, {
	name: DP.string(),
});

const result = extended.parse({
	id: 1,
	name: "Alex",
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id: number; name: string }
}

const withMore = DP.extends(base, {
	active: DP.boolean(),
});
const withMoreResult = withMore.parse({
	id: 2,
	active: true,
});

const nested = DP.extends(
	DP.object({ id: DP.number() }),
	{ meta: DP.object({ tag: DP.string() }) },
);
const nestedResult = nested.parse({
	id: 3,
	meta: { tag: "dev" },
});
