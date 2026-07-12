import { DPE, E, unwrap } from "@scripts";

const parser = DPE.boolean().coerce();
const result = parser.parse("true");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: boolean
}

const fromNumber = DPE.boolean().coerce();
const numberResult = fromNumber.parse(1);

const optionalBoolean = DPE.boolean()
	.coerce()
	.optional();
const optionalResult = optionalBoolean.parse(undefined);
