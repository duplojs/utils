import { E, unwrap, DPE } from "@duplojs/utils";

const schema = DPE
	.coerce
	.number()
	.min(0)
	.max(10_000);

const result = schema.parse("4200");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
