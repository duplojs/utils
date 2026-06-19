import { E, pipe, type ExpectType } from "@scripts";

const payment = true
	? E.right("payment.accepted", 120 as const)
	: E.left("payment.rejected", "insufficient funds" as const);

const formattedPayment = E.whenIsSelected(
	payment,
	{
		"payment.accepted": true,
		"payment.rejected": false,
	},
	(amount) => `paid:${amount}` as const,
);

type formattedPaymentCheck = ExpectType<
	typeof formattedPayment,
	"paid:120" | E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const rejectedPayment = E.left(
	"payment.rejected",
	"insufficient funds" as const,
);

const unchangedPayment = E.whenIsSelected(
	rejectedPayment,
	{
		"payment.rejected": false,
	},
	() => 0,
);

type unchangedPaymentCheck = ExpectType<
	typeof unchangedPayment,
	number | E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const pipedPayment = pipe(
	payment,
	E.whenIsSelected(
		{
			"payment.accepted": true,
			"payment.rejected": false,
		},
		(amount) => ({ amount }),
	),
);

type pipedPaymentCheck = ExpectType<
	typeof pipedPayment,
	{ readonly amount: 120 } | E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;
