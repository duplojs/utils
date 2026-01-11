import { DPE, E, unwrap } from "@scripts";

const parser = DPE.union([DPE.string(), DPE.number()]);
const result = parser.parse("hello");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | number
}

const literals = DPE.union([DPE.literal("on"), DPE.literal("off")]);
const literalResult = literals.parse("off");

const mixed = DPE.union([DPE.number(), DPE.boolean()]);
const mixedResult = mixed.parse(true);
