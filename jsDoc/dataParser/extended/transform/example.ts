import { DPE, E, unwrap } from "@scripts";

const parser = DPE.transform(DPE.string(), (value) => value.length);
const result = parser.parse("Duplo");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const toUpper = DPE.transform(DPE.string(), (value) => value.toUpperCase());
const upperResult = toUpper.parse("duplo");

const double = DPE.transform(DPE.number(), (value) => value * 2);
const doubleResult = double.parse(3);
