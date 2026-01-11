import { DPE, E, unwrap } from "@scripts";

const parser = DPE.object({
	id: DPE.number(),
	name: DPE.string(),
});

const partialUser = parser.partial();
const requiredUser = partialUser.required();
const result = requiredUser.parse({
	id: 1,
	name: "Alex",
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id: number; name: string }
}

const fromOptional = DPE.object({ name: DPE.optional(DPE.string()) }).required();
const optionalResult = fromOptional.parse({ name: "Alex" });

const strict = parser.required();
const strictResult = strict.parse({
	id: 1,
	name: "Alex",
});
