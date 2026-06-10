import { E, pipe, type ExpectType } from "@duplojs/utils";

const payment = true
	? E.right("payment.accepted", 120)
	: E.left("payment.rejected", "insufficient funds");

const acceptedPayment = E.unwrapSelectionOrThrow(payment, {
	"payment.accepted": true,
	"payment.rejected": false,
});

type acceptedPaymentCheck = ExpectType<
	typeof acceptedPayment,
	120,
	"strict"
>;

const paymentPayload = pipe(
	payment,
	E.unwrapSelectionOrThrow({
		"payment.accepted": true,
		"payment.rejected": true,
	}),
);

type paymentPayloadCheck = ExpectType<
	typeof paymentPayload,
	120 | "insufficient funds",
	"strict"
>;
