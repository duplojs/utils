import { DPE, E, unwrap } from "@scripts";

const parser = DPE.bigint().max(10n);
const result = parser.parse(5n);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: bigint
}

const withMessage = DPE.bigint().max(100n, { errorMessage: "bigint.too-large" });
const messageResult = withMessage.parse(100n);

const chained = DPE.bigint().min(1n).max(5n);
const chainedResult = chained.parse(2n);
