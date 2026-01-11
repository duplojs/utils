import { DP, E, unwrap } from "@scripts";

const parser = DP.record(DP.string(), DP.number());
const result = parser.parse({
	aKey: 1,
	bKey: 2,
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: Record<string, number>
}

const keyUnion = DP.union([DP.literal("xPos"), DP.literal("yPos")]);
const strictKeys = DP.record(keyUnion, DP.boolean());
const strictResult = strictKeys.parse({
	xPos: true,
	yPos: false,
});

const withCheckers = DP.record(DP.string(), DP.string(), {
	checkers: [DP.checkerRefine((value) => Object.keys(value).length > 0)],
});
