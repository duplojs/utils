import { DPE, E, unwrap } from "@scripts";

const parser = DPE.lazy(() => DPE.string());
const result = parser.parse("lazy");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

interface RecursiveSchema {
	value: number;
	next?: RecursiveSchema;
}

const recursive: DPE.Contract<RecursiveSchema> = DPE.lazy(
	() => DPE.object({
		value: DPE.number(),
		next: DPE.optional(recursive),
	}),
);
const recursiveResult = recursive.parse({
	value: 1,
	next: { value: 2 },
});
