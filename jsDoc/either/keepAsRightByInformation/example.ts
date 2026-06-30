import { E, pipe, type ExpectType } from "@scripts";

const acceptedPayment = E.keepAsRightByInformation(
	E.left("payment.accepted", 120),
	"payment.accepted",
);
// type: Right<"payment.accepted", 120>

const rejectedPayment = E.keepAsRightByInformation(
	E.right("payment.rejected", "insufficient funds") as
		| E.Left<"payment.accepted", 120>
		| E.Right<"payment.rejected", "insufficient funds">,
	"payment.accepted",
);
// type: Left<"payment.rejected", "insufficient funds">

const payment = E.left("payment.accepted", 120) as
	| E.Left<"payment.accepted", 120>
	| E.Right<"payment.rejected", "insufficient funds">;

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
