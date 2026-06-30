import { E, pipe, type ExpectType } from "@scripts";

const payment = E.left("payment.accepted", 120) as
	| E.Left<"payment.accepted", 120>
	| E.Right<"payment.rejected", "insufficient funds">;

const selectedPayment = E.keepAsRightSelection(payment, {
	"payment.accepted": true,
	"payment.rejected": false,
});

type selectedPaymentCheck = ExpectType<
	typeof selectedPayment,
	| E.Right<"payment.accepted", 120>
	| E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const shouldKeepAsRight = Boolean(1);

const maybeSelectedPayment = E.keepAsRightSelection(payment, {
	"payment.accepted": shouldKeepAsRight,
	"payment.rejected": false,
});

type maybeSelectedPaymentCheck = ExpectType<
	typeof maybeSelectedPayment,
	| E.Right<"payment.accepted", 120>
	| E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const normalizedPayment = pipe(
	payment,
	E.keepAsRightSelection({
		"payment.accepted": true,
		"payment.rejected": true,
	}),
);

type normalizedPaymentCheck = ExpectType<
	typeof normalizedPayment,
	| E.Right<"payment.accepted", 120>
	| E.Right<"payment.rejected", "insufficient funds">,
	"strict"
>;
