import { pipe, type ExpectType, DDate } from "@scripts";
import { fromIso } from "./utils";

describe("toISOString", () => {
	it("toISOString converts positive TheDate to ISO string", () => {
		const result = DDate.toISOString("date1609459200000+");

		expect(result).toBe("2021-01-01T00:00:00.000Z");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("toISOString converts negative TheDate to ISO string", () => {
		const result = DDate.toISOString("date1000-");

		expect(result).toBe("1969-12-31T23:59:59.000Z");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("toISOString converts date with time to ISO string", () => {
		const result = DDate.toISOString(
			fromIso("2021-06-15T14:30:45.123Z"),
		);

		expect(result).toBe("2021-06-15T14:30:45.123Z");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("toISOString converts midnight date to ISO string", () => {
		const result = DDate.toISOString(
			fromIso("2021-12-25T00:00:00.000Z"),
		);

		expect(result).toBe("2021-12-25T00:00:00.000Z");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("toISOString converts leap year date to ISO string", () => {
		const result = DDate.toISOString(
			fromIso("2020-02-29T00:00:00.000Z"),
		);

		expect(result).toBe("2020-02-29T00:00:00.000Z");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.createOrThrow(1609459200000),
			DDate.toISOString,
		);

		expect(result).toBe("2021-01-01T00:00:00.000Z");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("use in pipe with date creation", () => {
		const result = pipe(
			fromIso("2021-06-15T14:30:45.123Z"),
			DDate.toISOString,
		);

		expect(result).toBe("2021-06-15T14:30:45.123Z");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
