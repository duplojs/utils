import { DClean, forward, pipe, when, type ExpectType } from "@scripts";
import { type Primitive } from "@scripts/clean";

describe("equal", () => {
	it("returns true for primitives with same underlying value", () => {
		const one = DClean.Number.createOrThrow(1 as number);
		const same = DClean.Number.createOrThrow(1);
		const result = DClean.equal(one, same);

		expect(result).toBe(true);

		if (result) {
			type Check = ExpectType<
				typeof one,
				DClean.Primitive<number> & DClean.Primitive<1>,
				"strict"
			>;
		}
	});

	it("returns false for different values", () => {
		const one = forward<
			Primitive<1> | Primitive<2>
		>(DClean.Number.createOrThrow(1));
		const two = DClean.Number.createOrThrow(2);

		expect(DClean.equal(one, two)).toBe(false);
	});

	it("works with date primitives", () => {
		const dateValue = DClean.Date.createOrThrow("date1700000000+");
		const sameDate = DClean.Date.createOrThrow("date1700000000+");
		const otherDate = DClean.Date.createOrThrow("date1700000100+");

		expect(DClean.equal(dateValue, sameDate)).toBe(true);
		expect(DClean.equal(dateValue, otherDate)).toBe(false);
	});

	it("works with null", () => {
		const dateValue = DClean.Date.createOrThrow("date1700000000+") as DClean.Date | null;

		const result = DClean.equal(dateValue, null);

		expect(result).toBe(false);
		expect(DClean.equal(null as DClean.Date | null, dateValue)).toBe(false);
		expect(DClean.equal(null, null)).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof dateValue,
				null,
				"strict"
			>;
		}
	});

	it("works in pipe with when", () => {
		const one = DClean.Number.createOrThrow(1 as number);
		const result = pipe(
			one,
			when(
				DClean.equal(1),
				(value) => {
					type Check = ExpectType<
						typeof value,
						DClean.Primitive<number> & DClean.Primitive<1>,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(one);
	});
});
