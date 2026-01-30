import { type ExpectType, C } from "@duplojs/utils";

const UsernameConstraints = C.createConstraintsSet(
	C.String,
	[
		C.StringMin(3),
		C.StringMax(16),
	],
);

const username = UsernameConstraints.createOrThrow("Ada");

type check = ExpectType<
	typeof username,
	& C.Primitive<"Ada">
	& C.GetConstraints<typeof UsernameConstraints>,
	"strict"
>;
