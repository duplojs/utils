import { pipe, type ExpectType, DDate } from "@scripts";

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
			DDate.create("2021y-6m-15d-14h-30mn-45s-123ms"),
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
			DDate.create("2021y-12m-25d"),
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
			DDate.create("2020y-2m-29d"),
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
			DDate.create(1609459200000),
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
			DDate.create("2021y-6m-15d-14h-30mn-45s-123ms"),
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
