import { DPE, E, unwrap } from "@scripts";

const parser = DPE.tuple([DPE.string(), DPE.number()]).min(2);
const result = parser.parse(["id", 42]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: [string, number]
}

const withRest = DPE.tuple([DPE.string()], { rest: DPE.number() }).min(2);
const withRestResult = withRest.parse(["a", 1, 2]);

const withMessage = DPE.tuple(
	[DPE.boolean()],
).min(1, { errorMessage: "tuple.too-short" });
const withMessageResult = withMessage.parse([true]);
