import { DP, E, unwrap } from "@scripts";

const parser = DP.boolean();
const result = parser.parse(true);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: boolean
}

const onlyTrue = DP.boolean()
	.addChecker(DP.checkerRefine((value) => value === true));

const coerceParser = DP.coercer(DP.boolean());
const coerceResult = coerceParser.parse("false");
