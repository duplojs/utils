import { toTransform } from "@scripts";

class Money {
	public constructor(
		public amount: number,
		public currency: string,
	) {}

	public toTransform() {
		return {
			amount: this.amount,
			currency: this.currency,
		};
	}
}

const input = {
	id: "INV-1",
	total: new Money(99, "EUR"),
	lines: [
		new Money(49.5, "EUR"),
		new Money(49.5, "EUR"),
	],
};

const result = toTransform(input);

// type: { id: string; total: { amount: number; currency: string; }; lines: { amount: number; currency: string; }[]; }
