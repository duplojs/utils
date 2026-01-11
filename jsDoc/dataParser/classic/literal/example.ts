import { DP, E, unwrap } from "@scripts";

const parser = DP.literal("status");
const result = parser.parse("status");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: "status"
}

const numberLiteral = DP.literal(42);
const numberResult = numberLiteral.parse(42);

const boolLiteral = DP.literal(true);
const boolResult = boolLiteral.parse(true);
