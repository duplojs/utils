import { DPE, E, unwrap } from "@duplojs/utils";

const schema = DPE
	.boolean({ coerce: true })
	.refine((value) => value === false, {
		errorMessage: "feature.must-be-disabled",
	});

const result = schema.parse("false");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
