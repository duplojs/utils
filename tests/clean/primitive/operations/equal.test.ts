import { DClean, unwrap, type ExpectType } from "@scripts";

describe("clean primitive equal", () => {
	const one = DClean.Number.createOrThrow(1);
	const oneBis = DClean.Number.createOrThrow(1);
	const two = DClean.Number.createOrThrow(2);

	it("returns true for primitives with same underlying value", () => {
		const result = DClean.equal(one, oneBis);
		expect(result).toBe(true);

		if (result) {
			type Check = ExpectType<
				typeof one,
				typeof oneBis,
				"strict"
			>;
		}
	});

	it("returns false for different values", () => {
		expect(DClean.equal(one, two)).toBe(false);
	});

	it("works with date primitives", () => {
		const dateValue = DClean.Date.createOrThrow("date1700000000+");
		const sameDate = DClean.Date.createOrThrow("date1700000000+");
		const otherDate = DClean.Date.createOrThrow("date1700000100+");

		expect(DClean.equal(dateValue)(sameDate)).toBe(true);
		expect(DClean.equal(dateValue)(otherDate)).toBe(false);

		expect(unwrap(dateValue)).toBe("date1700000000+");
	});
});
