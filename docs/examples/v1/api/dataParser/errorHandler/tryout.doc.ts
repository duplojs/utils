import { DP, E, unwrap, type ExpectType } from "@duplojs/utils";

const schema = DP.errorHandler(
	DP.object({
		age: DP.number({ errorMessage: "invalid number" }),
	}),
	DP.createErrorMessageTransformer(
		DP.numberKind,
		() => "Age must be a valid number.",
	),
);

const result = schema.parse({
	age: "twenty",
});

if (E.isLeft(result)) {
	const error = unwrap(result);
	const message = error.issues[0]?.message;
	type check = ExpectType<
		typeof message,
		string | undefined,
		"strict"
	>;
}
