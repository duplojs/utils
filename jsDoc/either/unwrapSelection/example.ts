import { E, pipe, type ExpectType } from "@scripts";

const payment = true
	? E.right("payment.accepted", 120)
	: E.left("payment.rejected", "insufficient funds");

const selected = E.unwrapSelection(payment, {
	"payment.accepted": true,
	"payment.rejected": false,
});

type selectedCheck = ExpectType<
	typeof selected,
	120 | E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const shouldUnwrap = Boolean(1);

const maybeSelected = E.unwrapSelection(payment, {
	"payment.accepted": shouldUnwrap,
	"payment.rejected": false,
});

type maybeSelectedCheck = ExpectType<
	typeof maybeSelected,
	| 120
	| E.Right<"payment.accepted", 120>
	| E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const piped = pipe(
	payment,
	E.unwrapSelection({
		"payment.accepted": true,
		"payment.rejected": true,
	}),
);

type pipedCheck = ExpectType<
	typeof piped,
	120 | "insufficient funds",
	"strict"
>;
