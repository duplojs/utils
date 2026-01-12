import { DPE, E, unwrap } from "@scripts";

const parser = DPE.array(DPE.string()).min(2);
const result = parser.parse(["a", "b"]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string[]
}

const numbers = DPE.array(DPE.number()).min(1);
const numbersResult = numbers.parse([1]);

const nested = DPE.array(DPE.array(DPE.boolean())).min(1);
const nestedResult = nested.parse([[true]]);
