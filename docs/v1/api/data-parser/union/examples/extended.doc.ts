import { DPE, DP, E, unwrap } from "@duplojs/utils";

const schema = DPE
	.union([
		DP.literal("ok"),
		DP.number(),
	])
	.array();

const result = schema.parse(["ok", 4]);

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
