import { DP, E, unwrap } from "@duplojs/utils";

const schema = DP.object({
	id: DP.number(),
	displayName: DP.string(),
	email: DP.string(),
	role: DP.literal(["user", "admin", "support"]),
});

const pickSchema = DP.pick(
	schema,
	{
		id: true,
		displayName: true,
	},
);

const result = pickSchema.parse({
	id: 42,
	displayName: "mathcovax",
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
