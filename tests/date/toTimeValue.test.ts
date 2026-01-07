import { type ExpectType, DDate } from "@scripts";
import { toTimeValue } from "@scripts/date/toTimeValue";

describe("toTimeValue", () => {
	it("parses positive time strings", () => {
		const result = toTimeValue("time123+");

		expect(result).toBe(123);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("parses negative time strings", () => {
		expect(toTimeValue("time123-")).toBe(-123);
	});

	it("clamps values above maxTimeValue", () => {
		const input = "time9999999999999999+";
		const result = toTimeValue(input);

		expect(result).toBe(DDate.maxTimeValue);
	});

	it("clamps values below minTimeValue", () => {
		const input = "time9999999999999999-";
		const result = toTimeValue(input);

		expect(result).toBe(DDate.minTimeValue);
	});
});
