import { DPE, E, unwrap } from "@duplojs/utils";

const schema = DPE
	.object({
		id: DPE.number(),
		displayName: DPE.string(),
		email: DPE.string(),
		role: DPE.literal(["user", "admin", "support"]),
	})
	.pick({
		id: true,
		displayName: true,
	});

const result = schema.parse({
	id: 42,
	displayName: "mathcovax",
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
