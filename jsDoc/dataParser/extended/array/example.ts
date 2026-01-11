import { DPE, E, unwrap } from "@scripts";

const parser = DPE.array(DPE.string()).min(1).max(3);
const result = parser.parse(["a", "b"]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string[]
}

const numbers = DPE.array(DPE.number()).min(2);
const numbersResult = numbers.parse([1, 2, 3]);

const nested = DPE.array(DPE.array(DPE.boolean()));
const nestedResult = nested.parse([[true, false]]);
