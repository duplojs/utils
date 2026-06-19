import { E, pipe, type ExpectType } from "@duplojs/utils";

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
