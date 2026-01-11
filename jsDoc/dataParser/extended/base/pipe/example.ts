import { DPE, DP, E, unwrap } from "@scripts";

const parser = DPE.string().pipe(DPE.coerce.number());
const result = parser.parse("42");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const toUpper = DPE.string().pipe(
	DP.transform(
		DP.string(),
		(value) => value.toUpperCase(),
	),
);
const upperResult = toUpper.parse("duplo");
