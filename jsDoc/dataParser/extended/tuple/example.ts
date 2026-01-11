import { DPE, E, unwrap } from "@scripts";

const parser = DPE.tuple([DPE.string(), DPE.number()]);
const result = parser.parse(["id", 42]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: [string, number]
}

const withRest = DPE.tuple([DPE.string()], { rest: DPE.number() });
const restResult = withRest.parse(["a", 1, 2]);

const bools = DPE.tuple([DPE.boolean(), DPE.boolean()]);
const boolResult = bools.parse([true, false]);
