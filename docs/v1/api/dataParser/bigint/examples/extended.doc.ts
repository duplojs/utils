import { DPE, E, unwrap } from "@duplojs/utils";

const schema = DPE
	.coerce
	.bigint()
	.min(1_000n)
	.max(9_999n);

const result = schema.parse("2048");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
