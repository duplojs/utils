import { E, type ExpectType } from "@duplojs/utils";

const payment = true
	? E.left("payment.rejected", "insufficient funds")
	: E.right("payment.accepted", 120);

const unwrappedLeft = E.unwrapLeft(payment);

type unwrappedLeftCheck = ExpectType<
	typeof unwrappedLeft,
	"insufficient funds" | E.Right<"payment.accepted", 120>,
	"strict"
>;
