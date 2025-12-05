import { DPE, E, unwrap } from "@duplojs/utils";

const schema = DPE
	.object({
		id: DPE.number(),
		email: DPE.string(),
		password: DPE.string(),
		token: DPE.string(),
	})
	.omit({
		password: true,
		token: true,
	});

const result = schema.parse({
	id: 7,
	email: "contact@duplojs.dev",
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
