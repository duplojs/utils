import { type ExpectType, DDate, DEither, unwrap } from "@scripts";

describe("create", () => {
	it("create from timestamp", () => {
		const result = DDate.create(1609459200000);

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1609459200000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from negative timestamp", () => {
		const result = DDate.create(-1000);

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1000-");
		}

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

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1609459200000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date object with negative timestamp", () => {
		const nativeDate = new Date(-1000);
		const result = DDate.create(nativeDate);

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1000-");
		}

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

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1609459200000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from TheDate negative", () => {
		const result = DDate.create("date1000-");

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1000-");
		}

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
		const expected = `date${Math.abs(timestamp)}${timestamp < 0 ? "-" : "+"}`;

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe(expected);
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from Date February 29 leap year", () => {
		const nativeDate = new Date("2020-02-29T00:00:00.000Z");
		const result = DDate.create(nativeDate);

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1582934400000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from safe date string", () => {
		const result = DDate.create("2024-06-05");

		expect(DDate.serialize(result)).toBe("date1717545600000+");

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

		expect(DDate.serialize(result)).toBe("date1717631999999+");

		type check = ExpectType<
			typeof result,
			DDate.TheDate,
			"strict"
		>;
	});

	it("create from safe date string before Christ", () => {
		const result = DDate.create("-000001-01-01");

		expect(DDate.serialize(result)).toBe("date62198755200000-");

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

	it("create from spooling date with Date value", () => {
		const nativeDate = new Date("2020-01-01T00:00:00.000Z");
		const result = DDate.create({ value: nativeDate });

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1577836800000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from spooling date with number value", () => {
		const result = DDate.create({ value: 1609459200000 });

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1609459200000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from spooling date with TheDate value", () => {
		const result = DDate.create({ value: "date1000-" });

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1000-");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from spooling date with serialized positive date", () => {
		const result = DDate.create({ value: "date1000+" });

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from spooling date with serialized negative date", () => {
		const result = DDate.create({ value: "date1000-" });

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1000-");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from spooling date with TheDate instance", () => {
		const inputValue = DDate.createOrThrow(1609459200000);
		const result = DDate.create({ value: inputValue });

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1609459200000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from spooling date with string value and timezone", () => {
		const result = DDate.create({
			value: "2024-01-01T00:00:00.000Z",
			timezone: "America/New_York",
		});

		const baseDate = DDate.createOrThrow(1704067200000);
		const offset = DDate.getTimezoneOffset(baseDate, "America/New_York");
		const expected = DDate.createOrThrow(
			DDate.toTimestamp(baseDate) - offset,
		);

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(
				DDate.toTimestamp(unwrap(result)),
			).toBe(
				DDate.toTimestamp(expected),
			);
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from spooling date with string value without timezone", () => {
		const result = DDate.create({
			value: "2024-01-01T00:00:00.000Z",
		});

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe("date1704067200000+");
		}

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("create from spooling date with overrides", () => {
		const inputValue = new Date("2020-01-01T00:00:00.000Z");
		const result = DDate.create({
			value: inputValue,
			year: 2022,
			month: 1,
			day: 2,
			hour: 3,
			minute: 4,
			second: 5,
			millisecond: 6,
		});

		const expectedDate = new Date(inputValue.getTime());
		expectedDate.setUTCFullYear(2022);
		expectedDate.setMonth(1);
		expectedDate.setDate(2);
		expectedDate.setHours(3);
		expectedDate.setMinutes(4);
		expectedDate.setSeconds(5);
		expectedDate.setMilliseconds(6);
		const expectedTimestamp = expectedDate.getTime();
		const expected = `date${Math.abs(expectedTimestamp)}${expectedTimestamp < 0 ? "-" : "+"}`;

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(DDate.serialize(unwrap(result))).toBe(expected);
		}

		expect(
			DDate.create({
				value: inputValue,
				year: 10000000000,
			}),
		).toStrictEqual(
			DEither.left("date-created-error", null),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("returns error for spooling date with invalid timezone", () => {
		const result = DDate.create({
			value: "2024-01-01T00:00:00.000Z",
			timezone: "Invalid/Timezone" as any,
		});

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("returns error for spooling date with invalid ISO value", () => {
		const result = DDate.create({ value: "2024-01-01" });

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});

	it("returns error for invalid spooling date value", () => {
		const result = DDate.create({ value: "not-a-date" });

		expect(result).toStrictEqual(DEither.left("date-created-error", null));

		type check = ExpectType<
			typeof result,
			DDate.MayBe,
			"strict"
		>;
	});
});
