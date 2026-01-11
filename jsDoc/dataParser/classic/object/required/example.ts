import { DP, E, unwrap } from "@scripts";

const userParser = DP.object({
	id: DP.number(),
	name: DP.string(),
});

const partialUser = DP.partial(userParser);
const requiredUser = DP.required(partialUser);
const result = requiredUser.parse({
	id: 1,
	name: "Alex",
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id: number; name: string }
}

const fromOptional = DP.required(DP.object({
	name: DP.optional(DP.string()),
}));
const requiredResult = fromOptional.parse({ name: "Alex" });
