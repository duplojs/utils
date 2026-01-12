import { DPE, DP, E, unwrap } from "@scripts";

const parser = DPE.string().optional();
const result = parser.parse(undefined);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | undefined
}

const withCoalescing = DPE.number().optional({ coalescingValue: 0 });
const coalesced = withCoalescing.parse(undefined);

const withCheckers = DPE.number().optional({
	checkers: [DP.checkerRefine((value) => value !== 13)],
});
