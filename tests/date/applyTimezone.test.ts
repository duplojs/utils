import { type ExpectType, DDate } from "@scripts";
import { vi } from "vitest";

describe("applyTimezone", () => {
	afterEach(() => {
		vi.unstubAllEnvs();
	});

	it("keeps same value for UTC", () => {
		const theDate = DDate.createOrThrow(1704067200000);
		const result = DDate.applyTimezone(theDate, "UTC");

		expect(result).toBe(theDate);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("supports the curried signature", () => {
		const theDate = DDate.createOrThrow(1704067200000);
		const apply = DDate.applyTimezone("America/New_York");
		const result = apply(theDate);

		const offset = DDate.getTimezoneOffset(theDate, "America/New_York");
		const expected = DDate.createOrThrow(
			DDate.toTimestamp(theDate) - offset,
		);

		expect(result).toBe(expected);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("applies timezone offset for America/New_York", () => {
		const baseDate = DDate.create("2002-09-13");
		const result = DDate.applyTimezone(baseDate, "Europe/Paris");

		vi.stubEnv("TZ", "Europe/Paris");

		expect(DDate.toNative(result).getDate()).toBe(13);
		expect(DDate.toNative(result).getUTCDate()).toBe(12);

		vi.stubEnv("TZ", "UTC");

		expect(DDate.toNative(result).getDate()).toBe(12);
		expect(DDate.toNative(result).getUTCDate()).toBe(12);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("is independent from process timezone", () => {
		const baseDate = DDate.createOrThrow(1704067200000);
		const expected = DDate.applyTimezone(baseDate, "America/New_York");

		vi.stubEnv("TZ", "Pacific/Auckland");
		const result = DDate.applyTimezone(baseDate, "America/New_York");

		expect(result).toBe(expected);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
