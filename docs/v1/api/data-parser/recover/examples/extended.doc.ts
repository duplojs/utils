import { DPE, DP, E, unwrap } from "@duplojs/utils";

const schema = DPE
	.object({
		id: DP.string(),
		active: DP.coerce.boolean(),
	})
	.recover({
		id: "fallback",
		active: false,
	});

const result = schema.parse({
	id: "42",
	active: "true",
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
