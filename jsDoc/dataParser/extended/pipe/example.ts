import { DPE, E, unwrap } from "@scripts";

const parser = DPE.pipe(DPE.string(), DPE.coerce.number());
const result = parser.parse("42");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const toLength = DPE.pipe(DPE.string(), DPE.transform(DPE.string(), (value) => value.length));
const lengthResult = toLength.parse("Duplo");

const passThrough = DPE.pipe(DPE.number(), DPE.number());
const passResult = passThrough.parse(10);
