import { type ExpectType, DDate } from "@scripts";

describe("toNative", () => {
	it("converts serialized TheDate to Date", () => {
		const result = DDate.toNative("date1609459200000+");

		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBe(1609459200000);

		type check = ExpectType<
			typeof result,
			Date,
			"strict"
		>;
	});

	it("converts TheDate instance to Date", () => {
		const input = DDate.createOrThrow(1609459200000);
		const result = DDate.toNative(input);

		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBe(1609459200000);
	});

	it("converts serialized TheTime to number", () => {
		const result = DDate.toNative("time123-");

		expect(result).toBe(-123);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("converts TheTime instance to number", () => {
		const input = DDate.createTime(2000, "millisecond");
		const result = DDate.toNative(input);

		expect(result).toBe(2000);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
