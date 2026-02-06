import { DDate, type ExpectType } from "@scripts";

describe("DDate.is", () => {
	it("returns true for valid TheDate strings", () => {
		const valid = DDate.createOrThrow(1700000000);
		expect(DDate.is(valid)).toBe(true);

		if (DDate.is(valid)) {
			type Check = ExpectType<
				typeof valid,
				DDate.TheDate,
				"strict"
			>;
		}
	});

	it("returns false for invalid strings", () => {
		expect(DDate.is("not-a-date")).toBe(false);
		expect(DDate.is("date-+")).toBe(false);
	});
});
