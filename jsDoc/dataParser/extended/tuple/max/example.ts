import { DPE, E, unwrap } from "@scripts";

const parser = DPE.tuple([DPE.string(), DPE.number()]).max(2);
const result = parser.parse(["id", 42]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: [string, number]
}

const withRest = DPE.tuple([DPE.string()], { rest: DPE.number() }).max(3);
const withRestResult = withRest.parse(["a", 1, 2]);

const withMessage = DPE.tuple(
	[DPE.boolean(), DPE.boolean()],
).max(2, { errorMessage: "tuple.too-long" });
const withMessageResult = withMessage.parse([true, false]);
