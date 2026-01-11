import { DPE, E, unwrap } from "@scripts";

const parser = DPE.boolean();
const result = parser.parse(true);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: boolean
}

const coerceParser = DPE.coerce.boolean();
const coerceResult = coerceParser.parse("false");

const optionalBool = DPE.boolean().optional();
const optionalResult = optionalBool.parse(undefined);
