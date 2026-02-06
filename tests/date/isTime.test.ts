import { DDate, type ExpectType } from "@scripts";

describe("isTime", () => {
	it("returns true for valid TheTime values", () => {
		const valid = DDate.createTimeOrThrow(12345);

		expect(DDate.isTime(valid)).toBe(true);
		expect(DDate.isTime(DDate.createTimeOrThrow(-12345))).toBe(true);

		if (DDate.isTime(valid)) {
			type Check = ExpectType<
				typeof valid,
				DDate.TheTime,
				"strict"
			>;
		}
	});

	it("returns false for invalid strings", () => {
		expect(DDate.isTime("not-a-time")).toBe(false);
		expect(DDate.isTime("time-+")).toBe(false);
	});
});
