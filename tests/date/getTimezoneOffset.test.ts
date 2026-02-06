import { type ExpectType, DDate } from "@scripts";

describe("getTimezoneOffset", () => {
	it("returns zero for UTC", () => {
		vi.stubEnv("TZ", "UTC");
		const theDate = DDate.createOrThrow(1704067200000);
		const result = DDate.getTimezoneOffset(theDate, "UTC");

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("returns offset for America/New_York", () => {
		vi.stubEnv("TZ", DDate.timezone["Europe/Paris"]);

		const theDate = DDate.createOrThrow(1704067200000);
		const result = DDate.getTimezoneOffset(theDate, "America/New_York");

		expect(result).toBe(-18000000);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("supports the curried signature", () => {
		vi.stubEnv("TZ", "UTC");

		const theDate = DDate.createOrThrow(1704067200000);
		const getOffset = DDate.getTimezoneOffset("America/New_York");
		const result = getOffset(theDate);

		expect(result).toBe(-18000000);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("accepts serialized dates as input", () => {
		vi.stubEnv("TZ", "UTC");

		const theDate = DDate.createOrThrow(1704067200000);
		const serialized = DDate.serialize(theDate);
		const result = DDate.getTimezoneOffset(serialized, "UTC");

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("returns the same value regardless of process timezone", () => {
		vi.stubEnv("TZ", DDate.timezone["America/New_York"]);
		const theDate = DDate.create("2002-09-13", { hour: "06" });
		const expected = DDate.getTimezoneOffset(theDate, "America/New_York");

		vi.stubEnv("TZ", "Pacific/Auckland");
		const result = DDate.getTimezoneOffset(theDate, "America/New_York");

		expect(result).toBe(expected);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
