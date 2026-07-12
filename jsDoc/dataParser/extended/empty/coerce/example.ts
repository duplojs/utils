import { DPE, E } from "@scripts";

const parser = DPE.empty().coerce();
const result = parser.parse("undefined");
if (E.isRight(result)) {
	// E.Success<undefined>
}

const nullableEmpty = DPE.empty()
	.coerce()
	.nullable();
const nullableResult = nullableEmpty.parse(null);

const optionalEmpty = DPE.empty()
	.coerce()
	.optional();
const optionalResult = optionalEmpty.parse(undefined);
