import { DPE, E } from "@scripts";

const parser = DPE.empty();
const result = parser.parse(undefined);
if (E.isRight(result)) {
	// E.EitherSuccess<undefined>
}

const coerceParser = DPE.coerce.empty();
const coerceResult = coerceParser.parse("undefined");

const optionalEmpty = DPE.empty().optional();
const optionalResult = optionalEmpty.parse(undefined);
