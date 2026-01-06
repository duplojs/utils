import { DDate, type ExpectType } from "@scripts";

describe("isTime", () => {
	it("returns true for valid TheTime strings", () => {
		const valid = "time12345+" as string;

		expect(DDate.isTime(valid)).toBe(true);
		expect(DDate.isTime("time12345-")).toBe(true);

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
