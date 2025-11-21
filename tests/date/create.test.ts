import { type ExpectType, DDate, DEither } from "@scripts";

describe("create", () => {
	it("create from timestamp", () => {
		const result = DDate.create(1609459200000);

		expect(result).toStrictEqual(DEither.success("date1609459200000+"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from negative timestamp", () => {
		const result = DDate.create(-1000);

		expect(result).toStrictEqual(DEither.success("date1000-"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from unsafe timestamp", () => {
		const result = DDate.create(Number.MAX_SAFE_INTEGER + 1);

		expect(result).toStrictEqual(DEither.error(null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from timestamp out of range (too high)", () => {
		const result = DDate.create(8640000000000001);

		expect(result).toStrictEqual(DEither.error(null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from timestamp out of range (too low)", () => {
		const result = DDate.create(-8640000000000001);

		expect(result).toStrictEqual(DEither.error(null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date object", () => {
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const result = DDate.create(nativeDate);

		expect(result).toStrictEqual(DEither.success("date1609459200000+"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date object with negative timestamp", () => {
		const nativeDate = new Date(-1000);
		const result = DDate.create(nativeDate);

		expect(result).toStrictEqual(DEither.success("date1000-"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("returns error for invalid Date object", () => {
		const result = DDate.create(new Date(NaN));

		expect(result).toStrictEqual(DEither.error(null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("returns error for Date objects out of supported range", () => {
		const above = DDate.create(new Date(DDate.maxTimestamp + 1));
		const below = DDate.create(new Date(DDate.minTimestamp - 1));

		expect(above).toStrictEqual(DEither.error(null));
		expect(below).toStrictEqual(DEither.error(null));
	});

	it("create from TheDate", () => {
		const result = DDate.create("date1609459200000+");

		expect(result).toStrictEqual(DEither.success("date1609459200000+"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from TheDate negative", () => {
		const result = DDate.create("date1000-");

		expect(result).toStrictEqual(DEither.success("date1000-"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date before Christ", () => {
		const nativeDate = new Date(Date.UTC(-100, 0, 1));
		const result = DDate.create(nativeDate);

		const timestamp = nativeDate.getTime();
		const expected = `date${Math.abs(timestamp)}${timestamp < 0 ? "-" : "+"}` as DDate.TheDate;

		expect(result).toStrictEqual(DEither.success(expected));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date February 29 leap year", () => {
		const nativeDate = new Date("2020-02-29T00:00:00.000Z");
		const result = DDate.create(nativeDate);

		expect(result).toStrictEqual(DEither.success("date1582934400000+"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});
});
