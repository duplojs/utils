import { DP, E, unwrap } from "@duplojs/utils";

const schema = DP.object({
	id: DP.number(),
	email: DP.string(),
	password: DP.string(),
	token: DP.string(),
});

const omitSchema = DP.omit(
	schema,
	{
		password: true,
		token: true,
	},
);

const result = omitSchema.parse({
	id: 7,
	email: "contact@duplojs.dev",
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
