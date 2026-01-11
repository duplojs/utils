import { DP, E, unwrap } from "@scripts";

const userParser = DP.object({
	id: DP.number(),
	name: DP.string(),
	email: DP.string(),
});

const withoutEmail = DP.omit(userParser, { email: true });
const result = withoutEmail.parse({
	id: 1,
	name: "Alex",
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id: number; name: string }
}

const omitMultiple = DP.omit(userParser, {
	id: true,
	email: true,
});
const omitResult = omitMultiple.parse({ name: "Alex" });
