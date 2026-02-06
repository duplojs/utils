import { DDate, type ExpectType, pipe } from "@scripts";

describe("TheDate", () => {
	it("returns a native Date with the same timestamp", () => {
		const baseDate = DDate.create("2020-01-01");

		const result = baseDate.toNative();

		expect(result).toBeInstanceOf(Date);
		expect(result.getTime()).toBe(baseDate.getTime());

		type check = ExpectType<
			typeof result,
			Date,
			"strict"
		>;
	});

	it("serializes with toString and toJSON", () => {
		const baseDate = DDate.create("2020-01-01");

		const asString = baseDate.toString();
		const asJson = baseDate.toJSON();

		expect(asString).toBe(DDate.serialize(baseDate));
		expect(asJson).toBe(DDate.serialize(baseDate));

		type check = ExpectType<
			typeof asString,
			DDate.SerializedTheDate,
			"strict"
		>;
	});

	it("prevents mutation through deprecated setters", () => {
		const baseDate = DDate.create("2020-01-01");
		const baseTimestamp = baseDate.getTime();

		expect(baseDate.setDate(10)).toBe(baseTimestamp);
		expect(baseDate.setFullYear(1999, 1, 1)).toBe(baseTimestamp);
		expect(baseDate.setHours(12, 30, 45, 500)).toBe(baseTimestamp);
		expect(baseDate.setMilliseconds(123)).toBe(baseTimestamp);
		expect(baseDate.setMinutes(59, 58, 57)).toBe(baseTimestamp);
		expect(baseDate.setMonth(6, 15)).toBe(baseTimestamp);
		expect(baseDate.setSeconds(42, 900)).toBe(baseTimestamp);
		expect(baseDate.setTime(123456789)).toBe(baseTimestamp);
		expect(baseDate.setUTCDate(20)).toBe(baseTimestamp);
		expect(baseDate.setUTCFullYear(2010, 2, 3)).toBe(baseTimestamp);
		expect(baseDate.setUTCHours(7, 8, 9, 10)).toBe(baseTimestamp);
		expect(baseDate.setUTCMilliseconds(777)).toBe(baseTimestamp);
		expect(baseDate.setUTCMinutes(11, 12, 13)).toBe(baseTimestamp);
		expect(baseDate.setUTCMonth(4, 5)).toBe(baseTimestamp);
		expect(baseDate.setUTCSeconds(14, 15)).toBe(baseTimestamp);

		expect(baseDate.getTime()).toBe(baseTimestamp);
	});

	it("creates a safe instance via TheDate.new", () => {
		const result = DDate.TheDate.new(1.6);

		expect(result).toBeInstanceOf(DDate.TheDate);
		expect(result.getTime()).toBe(2);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("works inside pipe with instance methods", () => {
		const baseDate = DDate.create("2020-01-01");

		const result = pipe(
			baseDate,
			(value) => value.toNative(),
		);

		expect(result.getTime()).toBe(baseDate.getTime());

		type check = ExpectType<
			typeof result,
			Date,
			"strict"
		>;
	});
});
