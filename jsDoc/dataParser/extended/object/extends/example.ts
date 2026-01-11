import { DPE, E, unwrap } from "@scripts";

const base = DPE.object({
	id: DPE.number(),
});

const extended = base.extends({
	name: DPE.string(),
});

const result = extended.parse({
	id: 1,
	name: "Alex",
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id: number; name: string }
}

const withMore = base.extends({
	active: DPE.boolean(),
});
const withMoreResult = withMore.parse({
	id: 2,
	active: true,
});

const chained = DPE.object({ id: DPE.number() })
	.extends({ name: DPE.string() })
	.partial();
const chainedResult = chained.parse({});
