import { DPE, E, unwrap } from "@scripts";

const parser = DPE.bigint().coerce();
const result = parser.parse("42");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: bigint
}

const withMin = DPE.bigint()
	.min(1n)
	.coerce();
const minResult = withMin.parse("42");

const withMax = DPE.bigint()
	.max(100n)
	.coerce();
const maxResult = withMax.parse(42);
