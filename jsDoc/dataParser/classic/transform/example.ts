import { DP, E, S, unwrap } from "@scripts";

const parser = DP.transform(DP.string(), (value) => value.length);
const result = parser.parse("Duplo");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const toUpper = DP.transform(
	DP.string(),
	S.toUpperCase,
);
const upperResult = toUpper.parse("duplo");
