import { type ExpectType } from "@duplojs/utils";

abstract class Payment {
	public createdAt = new Date();

	public constructor(
		public paymentId: string,
	) {}
}

class PaymentPending extends Payment {
	public constructor(
		paymentId: string,
	) {
		super(paymentId);
	}
}

class PaymentValidated extends Payment {
	public constructor(
		paymentId: string,
		public transactionId: string,
	) {
		super(paymentId);
	}
}

class PaymentRejected extends Payment {
	public constructor(
		paymentId: string,
		public reason: "insufficient_funds" | "card_expired" | "fraud",
	) {
		super(paymentId);
	}
}

const payment: Payment = new PaymentRejected(
	"superId",
	"card_expired",
);

if (payment instanceof PaymentPending) {
	type check = ExpectType<
		typeof payment,
		PaymentPending,
		"strict"
	>;
}

if (payment instanceof PaymentValidated) {
	type check = ExpectType<
		typeof payment,
		PaymentValidated,
		"strict"
	>;
}

if (payment instanceof PaymentRejected) {
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
		paymentId: string;
		createdAt: string;
	}
	| {
		paymentId: string;
		createdAt: string;
		transactionId: string;
	}
	| {
		paymentId: string;
		createdAt: string;
		reason: "insufficient_funds" | "card_expired" | "fraud";
	}
);

const receivedPayment: PaymentWithLostInstance = JSON.parse(stringifiedPayment);

// hard to identify and sometimes impossible

if (
	!("reason" in receivedPayment)
	&& !("transactionId" in receivedPayment)
) {
	// PaymentPending
}

if ("transactionId" in receivedPayment) {
	// PaymentValidated
}

if ("reason" in receivedPayment) {
	// PaymentRejected
}
