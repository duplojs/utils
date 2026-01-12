import { DPE, DP, E, unwrap } from "@scripts";

const parser = DPE.string().or(DPE.number());
const result = parser.parse(42);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | number
}

const literals = DPE.literal("on").or(DPE.literal("off"));
const literalResult = literals.parse("off");

const withCheckers = DPE.string().or(DPE.coerce.number(), {
	checkers: [DP.checkerRefine((value) => value !== "forbidden")],
});
