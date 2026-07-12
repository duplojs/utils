import { DPE, E, unwrap } from "@scripts";

const parser = DPE.number().coerce();
const result = parser.parse("42");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withMin = DPE.number()
	.min(4)
	.coerce();
const minResult = withMin.parse("5");

const asInt = DPE.number()
	.int()
	.coerce();
const intResult = asInt.parse("10");
