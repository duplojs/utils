import { type ExpectType, DDate } from "@scripts";
import { vi } from "vitest";

describe("format", () => {
	beforeEach(() => {
		vi.stubEnv("TZ", "UTC");
	});

	afterEach(() => {
		vi.unstubAllEnvs();
	});

	it("formats a date in UTC", () => {
		const theDate = DDate.createOrThrow(1704067200000);
		const result = DDate.format(theDate, "YYYY-MM-DD HH:mm:ss.SSS ZZ", "UTC");

		expect(result).toBe("2024-01-01 00:00:00.0 UTC");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("formats a date in America/New_York", () => {
		const theDate = DDate.createOrThrow(1704067200000);
		const result = DDate.format(theDate, "YYYY-MM-DD HH:mm:ss.SSS ZZ", "America/New_York");

		expect(result).toBe("2023-12-31 19:00:00.0 America/New_York");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("formats with the curried signature", () => {
		const theDate = DDate.createOrThrow(1704067200000);
		const formatter = DDate.format("YYYY/MM/DD", "UTC");
		const result = formatter(theDate);

		expect(result).toBe("2024/01/01");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
