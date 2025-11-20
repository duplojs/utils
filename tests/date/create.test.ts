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

	it("create from string date format basic", () => {
		const result = DDate.create("2021y-1m-1d");

		expect(result).toBe("date1609459200000+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from string date format with hours", () => {
		const result = DDate.create("2021y-1m-1d-12h");

		expect(result).toBe("date1609502400000+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from string date format with hours and minutes", () => {
		const result = DDate.create("2021y-1m-1d-12h-30mn");

		expect(result).toBe("date1609504200000+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from string date format with hours, minutes and seconds", () => {
		const result = DDate.create("2021y-1m-1d-12h-30mn-45s");

		expect(result).toBe("date1609504245000+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from string date format complete", () => {
		const result = DDate.create("2021y-1m-1d-12h-30mn-45s-123ms");

		expect(result).toBe("date1609504245123+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from string date format before Christ", () => {
		const result = DDate.create("-100y-1m-1d");

		const nativeDate = new Date(0);
		nativeDate.setUTCFullYear(-100);
		nativeDate.setUTCMonth(0);
		nativeDate.setUTCDate(1);

		expect(result).toBe(`date${Math.abs(nativeDate.getTime())}-`);

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from string date format February 29 leap year", () => {
		const result = DDate.create("2020y-2m-29d");

		expect(result).toBe("date1582934400000+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});
});
