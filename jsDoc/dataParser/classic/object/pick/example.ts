import { DP, E, unwrap } from "@scripts";

const userParser = DP.object({
	id: DP.number(),
	name: DP.string(),
	email: DP.string(),
});

const picked = DP.pick(userParser, {
	id: true,
	name: true,
});
const result = picked.parse({
	id: 1,
	name: "Alex",
});
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: { id: number; name: string }
}
