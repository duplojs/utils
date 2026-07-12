import { DPE, E, unwrap } from "@scripts";

const parser = DPE.nil().coerce();
const result = parser.parse("null");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: null
}

const nullableNil = DPE.nil()
	.coerce()
	.nullable();
const nullableResult = nullableNil.parse(null);

const optionalNil = DPE.nil()
	.coerce()
	.optional();
const optionalResult = optionalNil.parse(undefined);
