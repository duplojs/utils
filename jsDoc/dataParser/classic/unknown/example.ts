import { DP, E, unwrap } from "@scripts";

const parser = DP.unknown();
const result = parser.parse({ any: "value" });
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: unknown
}

const nonEmptyString = DP.unknown({
	checkers: [DP.checkerRefine((value) => typeof value === "string" && value.length > 0)],
});

const numbersOnly = DP.unknown()
	.addChecker(DP.checkerRefine((value) => typeof value === "number"));
