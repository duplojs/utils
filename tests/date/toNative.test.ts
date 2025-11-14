import { pipe, type ExpectType, DDate } from "@scripts";

describe("toNative", () => {
	it("toNative converts positive TheDate to Date", () => {
		const result = DDate.toNative("date1609459200000+");

		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBe(1609459200000);

		type check = ExpectType<
			typeof result,
			Date,
			"strict"
		>;
	});

	it("toNative converts negative TheDate to Date", () => {
		const result = DDate.toNative("date1000-");

		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBe(-1000);

		type check = ExpectType<
			typeof result,
			Date,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create(1609459200000),
			DDate.toNative,
		);

		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBe(1609459200000);

		type check = ExpectType<
			typeof result,
			Date,
			"strict"
		>;
	});
});
