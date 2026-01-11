import { DPE, E, unwrap } from "@scripts";

const parser = DPE.literal("status");
const result = parser.parse("status");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: "status"
}

const numberLiteral = DPE.literal(42);
const numberResult = numberLiteral.parse(42);

const boolLiteral = DPE.literal(true);
const boolResult = boolLiteral.parse(true);
