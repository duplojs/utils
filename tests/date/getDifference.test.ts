import { DDate, pipe, type ExpectType } from "@scripts";

describe("getDifference", () => {
	it("returns signed difference in milliseconds with classic call", () => {
		const result = DDate.getDifference(
			DDate.create("2024-01-03"),
			DDate.create("2024-01-01"),
		);

		expect(result.toNative()).toBe(172800000);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("returns negative difference when input is before reference", () => {
		const result = DDate.getDifference(
			DDate.create("2024-01-01"),
			DDate.create("2024-01-03"),
		);

		expect(result.toNative()).toBe(-172800000);
	});

	it("supports serialized values", () => {
		const result = DDate.getDifference(
			"date172800000+",
			"date86400000+",
		);

		expect(result.toNative()).toBe(86400000);
	});

	it("clamps when difference is above max safe time value", () => {
		const result = DDate.getDifference(
			"date8640000000000000+",
			"date8640000000000000-",
		);

		expect(result.toNative()).toBe(DDate.maxTimeValue);
	});

	it("clamps when difference is below min safe time value", () => {
		const result = DDate.getDifference(
			"date8640000000000000-",
			"date8640000000000000+",
		);

		expect(result.toNative()).toBe(DDate.minTimeValue);
	});

	it("works in pipe with curried overload", () => {
		const result = pipe(
			DDate.create("2024-01-03"),
			DDate.getDifference(DDate.create("2024-01-01")),
		);

		expect(result.toNative()).toBe(172800000);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});
});
