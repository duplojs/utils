import { type ExpectType, DDate } from "@scripts";

describe("toTimeValue", () => {
	it("parses positive time strings", () => {
		const result = DDate.toTimeValue("time123+");

		expect(result).toBe(123);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("parses negative time strings", () => {
		expect(DDate.toTimeValue("time123-")).toBe(-123);
	});

	it("clamps values above maxTimeValue", () => {
		const input = "time9999999999999999+";
		const result = DDate.toTimeValue(input);

		expect(result).toBe(DDate.maxTimeValue);
	});

	it("clamps values below minTimeValue", () => {
		const input = "time9999999999999999-";
		const result = DDate.toTimeValue(input);

		expect(result).toBe(DDate.minTimeValue);
	});
});
