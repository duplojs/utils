import { DDate, type ExpectType, pipe } from "@scripts";

describe("TheTime", () => {
	it("returns the stored time value", () => {
		const baseTime = DDate.createTime(1_500, "millisecond");

		const result = baseTime.toNative();

		expect(result).toBe(1500);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("serializes with toString and toJSON", () => {
		const baseTime = DDate.createTime(2_000, "millisecond");

		const asString = baseTime.toString();
		const asJson = baseTime.toJSON();

		expect(asString).toBe(DDate.serialize(baseTime));
		expect(asJson).toBe(DDate.serialize(baseTime));

		type check = ExpectType<
			typeof asString,
			DDate.SerializedTheTime,
			"strict"
		>;
	});

	it("creates a safe instance via TheTime.new", () => {
		const result = DDate.TheTime.new(1.6);

		expect(result).toBeInstanceOf(DDate.TheTime);
		expect(result.toNative()).toBe(2);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("works inside pipe with instance methods", () => {
		const baseTime = DDate.createTime(3_000, "millisecond");

		const result = pipe(
			baseTime,
			(value) => value.toNative(),
		);

		expect(result).toBe(3000);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
