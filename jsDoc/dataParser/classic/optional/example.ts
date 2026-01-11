import { DP, E, unwrap } from "@scripts";

const parser = DP.optional(DP.string());
const result = parser.parse(undefined);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | undefined
}

const withCoalescing = DP.optional(DP.number(), { coalescingValue: 0 });
const coalesced = withCoalescing.parse(undefined);

const withCheckers = DP.optional(DP.number(), {
	checkers: [DP.checkerRefine((value) => value !== 13)],
});
