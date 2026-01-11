import { DP, E, unwrap } from "@scripts";

const userParser = DP.object({
	id: DP.number(),
	name: DP.string(),
});

const partialUser = DP.partial(userParser);
const result = partialUser.parse({ name: "Alex" });
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id?: number; name?: string }
}
