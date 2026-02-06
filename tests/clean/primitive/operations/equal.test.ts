import { DClean, pipe, when, type ExpectType } from "@scripts";

describe("equal", () => {
	it("returns true for primitives with same underlying value", () => {
		const one = DClean.Number.createOrThrow(1);
		const same = DClean.Number.createOrThrow(1);
		const result = DClean.equal(one, same);

		expect(result).toBe(true);

		if (result) {
			type Check = ExpectType<
				typeof one,
				typeof same,
				"strict"
			>;
		}
	});

	it("returns false for different values", () => {
		const one = DClean.Number.createOrThrow(1);
		const two = DClean.Number.createOrThrow(2);

		expect(DClean.equal(one, two)).toBe(false);
	});

	it("supports curried usage", () => {
		const one = DClean.Number.createOrThrow(1);
		const isEqual = DClean.equal(one);

		const result = isEqual(
			DClean.Number.createOrThrow(1),
		);

		expect(result).toBe(true);
	});

	it("works with date primitives", () => {
		const dateValue = DClean.Date.createOrThrow("date1700000000+");
		const sameDate = DClean.Date.createOrThrow("date1700000000+");
		const otherDate = DClean.Date.createOrThrow("date1700000100+");

		expect(DClean.equal(dateValue, sameDate)).toBe(true);
		expect(DClean.equal(dateValue, otherDate)).toBe(false);
	});

	it("works in pipe with when", () => {
		const one = DClean.Number.createOrThrow(1);
		const result = pipe(
			one,
			when(
				DClean.equal(DClean.Number.createOrThrow(1)),
				(value) => {
					type Check = ExpectType<
						typeof value,
						typeof one,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(one);
	});
});
