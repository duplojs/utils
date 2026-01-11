import { DPE, DP, E, unwrap } from "@scripts";

const parser = DPE.string().nullable();
const result = parser.parse(null);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | null
}

const withCoalescing = DPE.number().nullable({ coalescingValue: 0 });
const coalesced = withCoalescing.parse(null);

const withCheckers = DPE.boolean().nullable({
	checkers: [DP.checkerRefine((value) => value !== null)],
});
