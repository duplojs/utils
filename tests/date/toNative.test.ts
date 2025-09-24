import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("toNative", () => {
	it("should convert to native Date object", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate;
		const result = DDate.toNative(date);

		expect(result).toBeInstanceOf(Date);
		expect(result.toISOString()).toBe("2023-12-25T14:30:45.123Z");
		expect(result.getFullYear()).toBe(2023);
		expect(result.getMonth()).toBe(11);
		expect(result.getDate()).toBe(25);

		type check = ExpectType<
			typeof result,
			Date,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"2023-12-25T14:30:45.123Z",
			DDate.create,
			DDate.toNative,
			(nativeDate) => nativeDate.getFullYear(),
		);

		expect(result).toBe(2023);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
