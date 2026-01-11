import { DPE, E, unwrap } from "@scripts";

const parser = DPE.bigint().min(1n);
const result = parser.parse(5n);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: bigint
}

const withMessage = DPE.bigint().min(10n, { errorMessage: "bigint.too-small" });
const messageResult = withMessage.parse(10n);

const chained = DPE.bigint().min(1n).max(5n);
const chainedResult = chained.parse(3n);
