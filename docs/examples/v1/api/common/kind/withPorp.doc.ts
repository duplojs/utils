import { type ExpectType, forward } from "@duplojs/utils";

interface PaymentPending {
	kind: "pending";
	paymentId: string;
	createdAt: Date;
}

interface PaymentValidated {
	kind: "validated";
	paymentId: string;
	createdAt: Date;
	transactionId: string;
}

interface PaymentRejected {
	kind: "rejected";
	paymentId: string;
	createdAt: Date;
	reason: "insufficient_funds" | "card_expired" | "fraud";
}

export type Payment =
  | PaymentPending
  | PaymentValidated
  | PaymentRejected;

const payment = forward<Payment>({
	kind: "rejected",
	paymentId: "superId",
	reason: "card_expired",
	createdAt: new Date(),
});

if (payment.kind === "pending") {
	type check = ExpectType<
		typeof payment,
		PaymentPending,
		"strict"
	>;
}

if (payment.kind === "validated") {
	type check = ExpectType<
		typeof payment,
		PaymentValidated,
		"strict"
	>;
}

if (payment.kind === "rejected") {
	type check = ExpectType<
		typeof payment,
		PaymentRejected,
		"strict"
	>;
}

const stringifiedPayment = JSON.stringify(payment);

// send payment to other external process

type PaymentWithLostInstance = (
	| {
		kind: "pending";
		paymentId: string;
		createdAt: string;
	}
	| {
		kind: "validated";
		paymentId: string;
		createdAt: Date;
		transactionId: string;
	}
	| {
		kind: "rejected";
		paymentId: string;
		createdAt: string;
		reason: "insufficient_funds" | "card_expired" | "fraud";
	}
);

const receivedPayment: PaymentWithLostInstance = JSON.parse(stringifiedPayment);

if (receivedPayment.kind === "pending") {
	// PaymentPending
}

if (receivedPayment.kind === "validated") {
	// PaymentValidated
}

if (receivedPayment.kind === "rejected") {
	// PaymentRejected
}
