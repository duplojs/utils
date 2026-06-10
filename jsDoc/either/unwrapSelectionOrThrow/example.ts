import { E, pipe, type ExpectType } from "@scripts";

const payment = true
	? E.right("payment.accepted", 120)
	: E.left("payment.rejected", "insufficient funds");

const payload = E.unwrapSelectionOrThrow(payment, {
	"payment.accepted": true,
	"payment.rejected": false,
});

type payloadCheck = ExpectType<
	typeof payload,
	120,
	"strict"
>;

const shouldUnwrap = Boolean(1);

const maybePayload = E.unwrapSelectionOrThrow(payment, {
	"payment.accepted": shouldUnwrap,
	"payment.rejected": true,
});

type maybePayloadCheck = ExpectType<
	typeof maybePayload,
	120 | "insufficient funds",
	"strict"
>;

const piped = pipe(
	payment,
	E.unwrapSelectionOrThrow({
		"payment.accepted": true,
		"payment.rejected": true,
	}),
);

type pipedCheck = ExpectType<
	typeof piped,
	120 | "insufficient funds",
	"strict"
>;
