import { DP, E, unwrap } from "@scripts";

const parser = DP.nullable(DP.string());
const result = parser.parse(null);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | null
}

const withCoalescing = DP.nullable(DP.number(), { coalescingValue: 0 });
const coalesced = withCoalescing.parse(null);

const withCheckers = DP.nullable(DP.boolean(), {
	checkers: [DP.checkerRefine((value) => value !== null)],
});
