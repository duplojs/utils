import { DPE, E, unwrap, S } from "@scripts";

const parser = DPE.string().transform((value) => value.length);
const result = parser.parse("Duplo");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const toUpper = DPE.string().transform(S.toUpperCase);
const upperResult = toUpper.parse("duplo");
