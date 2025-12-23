import { E, unwrap, DPE } from "@duplojs/utils";

const schema = DPE
	.string()
	.min(5, { errorMessage: "string.too-short" })
	.max(30);

const result = schema.parse("nestjs");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
