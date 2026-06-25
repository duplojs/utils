import { DP } from "@scripts";

type OrderCode = `order-${number}`;

const orderCodeChecker = DP.checkerRefine(
	(value: string): value is OrderCode => (
		value.startsWith("order-")
		&& Number.isSafeInteger(Number(value.slice(6)))
	),
);

const orderCodeParser = DP
	.string()
	.addChecker(orderCodeChecker);

const result = orderCodeParser.parse("order-42");
// E.Error<DP.DataParserError> | E.Success<OrderCode>

const booleanChecker = DP.checkerRefine(
	(value: number) => value > 0,
);
