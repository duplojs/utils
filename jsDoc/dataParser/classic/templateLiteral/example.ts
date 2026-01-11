import { DP, E, unwrap } from "@scripts";

const parser = DP.templateLiteral(["user-", DP.number()]);
const result = parser.parse("user-42");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const orderParser = DP.templateLiteral(["order-", DP.literal("vip"), "-", DP.number()]);
const orderResult = orderParser.parse("order-vip-12");

const withCheckers = DP.templateLiteral(["id-", DP.number()], {
	checkers: [DP.checkerRefine((value) => value.endsWith("0"))],
});
