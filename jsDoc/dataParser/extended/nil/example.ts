import { DPE, E, unwrap } from "@scripts";

const parser = DPE.nil();
const result = parser.parse(null);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: null
}

const coerceParser = DPE.coerce.nil();
const coerceResult = coerceParser.parse("null");

const nullableNil = DPE.nil().nullable();
const nullableResult = nullableNil.parse(null);
