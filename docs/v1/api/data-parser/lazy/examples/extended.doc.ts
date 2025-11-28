import { type DP, DPE, E, unwrap } from "@duplojs/utils";

interface Schema {
	id: string;
	children?: Schema[];
}

const schema: DP.Contract<Schema> = DPE.object({
	id: DPE.string(),
	children: DPE
		.lazy(() => schema)
		.array()
		.optional(),
});

const result = schema.parse({
	id: "node",
	children: [{ id: "child" }],
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
