import { DP } from "@duplojs/utils";

const schema = DP.object({
	name: DP.coerce.string().addChecker(DP.checkerStringMin(3)),
	email: DP.coerce.string().addChecker(DP.checkerEmail({ normalize: true })),
	age: DP.coerce.number().addChecker(DP.checkerNumberMin(0)),
	vip: DP.coerce.boolean(),
	budget: DP.coerce.bigint().addChecker(DP.checkerBigIntMin(0n)),
	joinedAt: DP.coerce.date(),
	maybeNull: DP.coerce.nil(),
	maybeEmpty: DP.coerce.empty(),
	roles: DP.array(DP.coerce.string()),
});

const result = schema.parse({
	name: "Alice",
	email: "Alice@example.com   ",
	age: "29",
	vip: "true",
	budget: "100000",
	joinedAt: "2024-03-01T10:00:00.000Z",
	maybeNull: undefined,
	maybeEmpty: null,
	roles: ["admin", 42],
});

