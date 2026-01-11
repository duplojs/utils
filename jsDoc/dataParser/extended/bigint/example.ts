import { DPE, E, unwrap } from "@scripts";

const parser = DPE.bigint().min(1n).max(10n);
const result = parser.parse(5n);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: bigint
}

const coerceParser = DPE.coerce.bigint();
const coerceResult = coerceParser.parse("42");

const onlySmall = DPE.bigint().max(3n);
const smallResult = onlySmall.parse(2n);
