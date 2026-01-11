import { DPE, E, unwrap } from "@scripts";

const parser = DPE.recover(DPE.number(), 0);
const result = parser.parse("not-a-number");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withString = DPE.recover(DPE.string(), "fallback");
const stringResult = withString.parse(123);

const okResult = parser.parse(10);
