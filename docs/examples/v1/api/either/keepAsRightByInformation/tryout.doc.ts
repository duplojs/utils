import { E, pipe, type ExpectType } from "@duplojs/utils";

const payment = E.left("payment.accepted", 120) as
	| E.Left<"payment.accepted", 120>
	| E.Right<"payment.rejected", "insufficient funds">;

const acceptedPayment = E.keepAsRightByInformation(
	payment,
	"payment.accepted",
);

type acceptedPaymentCheck = ExpectType<
	typeof acceptedPayment,
	| E.Right<"payment.accepted", 120>
	| E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const normalizedPayment = pipe(
	payment,
	E.keepAsRightByInformation([
		"payment.accepted",
		"payment.rejected",
	]),
);

type normalizedPaymentCheck = ExpectType<
	typeof normalizedPayment,
	| E.Right<"payment.accepted", 120>
	| E.Right<"payment.rejected", "insufficient funds">,
	"strict"
>;
