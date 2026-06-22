import { E, pipe, type ExpectType } from "@duplojs/utils";

const payment = true
	? E.right("payment.accepted", 120)
	: E.left("payment.rejected", "insufficient funds");

const acceptedPayment = E.forwardAssertsSelection(payment, {
	"payment.accepted": true,
	"payment.rejected": false,
});

type acceptedPaymentCheck = ExpectType<
	typeof acceptedPayment,
	E.Right<"payment.accepted", 120>,
	"strict"
>;

const rawValue = E.forwardAssertsSelection("unchanged", {});

type rawValueCheck = ExpectType<
	typeof rawValue,
	"unchanged",
	"strict"
>;

const forwardedPayment = pipe(
	payment,
	E.forwardAssertsSelection({
		"payment.accepted": true,
		"payment.rejected": true,
	}),
);

type forwardedPaymentCheck = ExpectType<
	typeof forwardedPayment,
	| E.Right<"payment.accepted", 120>
	| E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;
