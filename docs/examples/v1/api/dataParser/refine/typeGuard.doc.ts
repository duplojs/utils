import { DP, type E, type ExpectType } from "@duplojs/utils";

type OrderCode = `order-${number}`;

const schema = DP.string().addChecker(
	DP.checkerRefine(
		(value): value is OrderCode => (
			value.startsWith("order-")
			&& Number.isSafeInteger(Number(value.slice(6)))
		),
	),
);

const result = schema.parse("order-42");

type CheckResult = ExpectType<
	typeof result,
	E.Error<DP.DataParserError> | E.Success<OrderCode>,
	"strict"
>;

type CheckOutput = ExpectType<
	DP.Output<typeof schema>,
	OrderCode,
	"strict"
>;
