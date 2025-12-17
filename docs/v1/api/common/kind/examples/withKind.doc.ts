import { createKind, type ExpectType, forward, type Kind } from "@duplojs/utils";

const paymentPendingKind = createKind("paymentPending");
interface PaymentPending extends Kind<typeof paymentPendingKind.definition> {
	paymentId: string;
	createdAt: Date;
}

const paymentValidatedKind = createKind("paymentValidated");
interface PaymentValidated extends Kind<typeof paymentValidatedKind.definition> {
	paymentId: string;
	createdAt: Date;
	transactionId: string;
}

const paymentRejectedKind = createKind("paymentRejected");
interface PaymentRejected extends Kind<typeof paymentRejectedKind.definition> {
	paymentId: string;
	createdAt: Date;
	reason: "insufficient_funds" | "card_expired" | "fraud";
}

export type Payment =
  | PaymentPending
  | PaymentValidated
  | PaymentRejected;

const payment = forward<Payment>(
	paymentRejectedKind.addTo({
		paymentId: "superId",
		reason: "card_expired" as const,
		createdAt: new Date(),
	}),
);

if (paymentPendingKind.has(payment)) {
	type check = ExpectType<
		typeof payment,
		PaymentPending,
		"strict"
	>;
}

if (paymentValidatedKind.has(payment)) {
	type check = ExpectType<
		typeof payment,
		PaymentValidated,
		"strict"
	>;
}

if (paymentRejectedKind.has(payment)) {
	type check = ExpectType<
		typeof payment,
		PaymentRejected,
		"strict"
	>;
}

const stringifiedPayment = JSON.stringify(payment);

// send payment to other external process

type PaymentWithLostInstance = (
	| (
		& Kind<typeof paymentPendingKind.definition>
		& {
			paymentId: string;
			createdAt: string;
		}
	)
	| (
		& Kind<typeof paymentValidatedKind.definition>
		& {
			paymentId: string;
			createdAt: string;
			transactionId: string;
		}
	)
	| (
		& Kind<typeof paymentRejectedKind.definition>
		& {
			paymentId: string;
			createdAt: string;
			reason: "insufficient_funds" | "card_expired" | "fraud";
		}
	)
);

const receivedPayment: PaymentWithLostInstance = JSON.parse(stringifiedPayment);

if (paymentPendingKind.has(receivedPayment)) {
	// PaymentPending
}

if (paymentValidatedKind.has(receivedPayment)) {
	// PaymentValidated
}

if (paymentRejectedKind.has(receivedPayment)) {
	// PaymentRejected
}
