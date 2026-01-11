import { DPE, E, unwrap } from "@scripts";

const parser = DPE.nullable(DPE.string());
const result = parser.parse(null);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | null
}

const withCoalescing = DPE.nullable(DPE.number(), { coalescingValue: 0 });
const coalesced = withCoalescing.parse(null);

const nullableBool = DPE.nullable(DPE.boolean());
const boolResult = nullableBool.parse(true);
