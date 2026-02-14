import { DPE, E, unwrap } from "@scripts";

const parser = DPE.tuple([DPE.string()]).rest(DPE.number());
const result = parser.parse(["id", 1, 2]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: [string, ...number[]]
}

const boolTail = DPE.tuple([DPE.boolean()]).rest(DPE.boolean());
const boolTailResult = boolTail.parse([true, false, true]);

const chained = DPE.tuple([DPE.string()])
	.rest(DPE.number())
	.min(2)
	.max(4);
const chainedResult = chained.parse(["a", 1, 2]);
