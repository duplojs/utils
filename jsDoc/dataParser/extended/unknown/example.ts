import { DPE, E, unwrap } from "@scripts";

const parser = DPE.unknown();
const result = parser.parse({ any: "value" });
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: unknown
}

const numberResult = parser.parse(123);

const nullResult = parser.parse(null);
