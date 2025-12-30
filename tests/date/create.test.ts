import { type ExpectType, DDate, DEither } from "@scripts";

describe("create", () => {
	it("create from timestamp", () => {
		const result = DDate.create(1609459200000);

		expect(result).toStrictEqual(DEither.right("date-created", "date1609459200000+"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from negative timestamp", () => {
		const result = DDate.create(-1000);

		expect(result).toStrictEqual(DEither.right("date-created", "date1000-"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from unsafe timestamp", () => {
		const result = DDate.create(Number.MAX_SAFE_INTEGER + 1);

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from timestamp out of range (too high)", () => {
		const result = DDate.create(8640000000000001);

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from timestamp out of range (too low)", () => {
		const result = DDate.create(-8640000000000001);

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date object", () => {
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const result = DDate.create(nativeDate);

		expect(result).toStrictEqual(DEither.right("date-created", "date1609459200000+"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date object with negative timestamp", () => {
		const nativeDate = new Date(-1000);
		const result = DDate.create(nativeDate);

		expect(result).toStrictEqual(DEither.right("date-created", "date1000-"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("returns error for invalid Date object", () => {
		const result = DDate.create(new Date(NaN));

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("returns error for Date objects out of supported range", () => {
		const above = DDate.create(new Date(DDate.maxTimestamp + 1));
		const below = DDate.create(new Date(DDate.minTimestamp - 1));

		expect(above).toStrictEqual(DEither.left("date-created-error", null));
		expect(below).toStrictEqual(DEither.left("date-created-error", null));
	});

	it("create from TheDate", () => {
		const result = DDate.create("date1609459200000+");

		expect(result).toStrictEqual(DEither.right("date-created", "date1609459200000+"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from TheDate negative", () => {
		const result = DDate.create("date1000-");

		expect(result).toStrictEqual(DEither.right("date-created", "date1000-"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("returns error for TheDate outside safe range", () => {
		const result = DDate.create(`date${DDate.maxTimestamp}+`);

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

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

		expect(result).toStrictEqual(DEither.right("date-created", expected));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date February 29 leap year", () => {
		const nativeDate = new Date("2020-02-29T00:00:00.000Z");
		const result = DDate.create(nativeDate);

		expect(result).toStrictEqual(DEither.right("date-created", "date1582934400000+"));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from safe date string", () => {
		const result = DDate.create("2024-06-05");

		expect(result).toBe("date1717545600000+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from safe date string with time", () => {
		const result = DDate.create("2024-06-05", {
			hour: "23",
			minute: "59",
			second: "59",
			millisecond: "999",
		});

		expect(result).toBe("date1717631999999+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from safe date string before Christ", () => {
		const result = DDate.create("-000001-01-01");

		expect(result).toBe("date62198755200000-");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("type safe with create", () => {
		DDate.create("275759-09-13");

		DDate.create("275-09-13");

		DDate.create("274522-09-13");

		DDate.create("-271820-09-13");

		DDate.create("-271-09-13");

		DDate.create("-269005-09-13");

		DDate.create(
			// @ts-expect-error greater than limit
			"275760-09-13",
		);

		DDate.create(
			// @ts-expect-error greater than limit
			"285860-09-13",
		);

		DDate.create(
			// @ts-expect-error greater than limit
			"99995656-09-13",
		);

		DDate.create(
			// @ts-expect-error less than limit
			"-271821-09-13",
		);

		DDate.create(
			// @ts-expect-error less than limit
			"-281821-09-13",
		);

		DDate.create(
			// @ts-expect-error less than limit
			"-99995656-09-13",
		);

		DDate.create("2000-02-29");

		DDate.create("2800-02-29");

		DDate.create(
			// @ts-expect-error wrong leap year
			"2700-02-29",
		);

		DDate.create(
			// @ts-expect-error wrong leap year
			"2001-02-29",
		);
	});

	it("returns error for invalid input", () => {
		const result = DDate.create("not-a-date" as any);

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});
});
