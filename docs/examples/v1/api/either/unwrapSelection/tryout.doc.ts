import { E, pipe, type ExpectType } from "@duplojs/utils";

const payment = true
	? E.right("payment.accepted", 120)
	: E.left("payment.rejected", "insufficient funds");

const selectedPayment = E.unwrapSelection(payment, {
	"payment.accepted": true,
	"payment.rejected": false,
});

type selectedPaymentCheck = ExpectType<
	typeof selectedPayment,
	120 | E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const fullyUnwrappedPayment = pipe(
	payment,
	E.unwrapSelection({
		"payment.accepted": true,
		"payment.rejected": true,
	}),
);

type fullyUnwrappedPaymentCheck = ExpectType<
	typeof fullyUnwrappedPayment,
	120 | "insufficient funds",
	"strict"
>;
