import { DPE, E, unwrap } from "@scripts";

const parser = DPE.string().arrayCoalescing();
const result = parser.parse("a");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string[]
}

const listResult = parser.parse(["a", "b"]);

const numberParser = DPE.number().arrayCoalescing();
const numberResult = numberParser.parse(1);
