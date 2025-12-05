import { DP, E, unwrap } from "@duplojs/utils";

const schema = DP.object({
	name: DP.string(),
	age: DP
		.coerce
		.number()
		.addChecker(DP.checkerNumberMin(18)),
	roles: DP
		.array(DP.literal(["admin", "editor", "viewer"]))
		.addChecker(
			DP.checkerArrayMin(1),
			DP.checkerArrayMax(3),
		),
});

const result = schema.parse({
	name: "mathcovax",
	age: "23",
	roles: ["admin"],
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
