import { E, type ExpectType } from "@duplojs/utils";

const payment = true
	? E.right("payment.accepted", 120)
	: E.left("payment.rejected", "insufficient funds");

const unwrappedRight = E.unwrapRight(payment);

type unwrappedRightCheck = ExpectType<
	typeof unwrappedRight,
	120 | E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;
