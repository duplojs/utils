import { DPE, E, unwrap } from "@scripts";

const parser = DPE.number()
	.min(0)
	.max(10)
	.int();
const result = parser.parse(5);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const coerceParser = DPE.coerce.number();
const coerceResult = coerceParser.parse("42");

const intOnly = DPE.number().int();
const intResult = intOnly.parse(3);
