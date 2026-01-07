import { type ExpectType, DDate, DEither } from "@scripts";

describe("createTime", () => {
	it("creates from milliseconds by default", () => {
		const result = DDate.createTime(5000);

		expect(result).toStrictEqual(
			DEither.right("time-created", "time5000+"),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("creates from unit seconds", () => {
		const result = DDate.createTime(2, "second");

		expect(result).toBe("time2000+");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("creates from a spooling object", () => {
		const input = {
			week: 1,
			day: 2,
			hour: 3,
			minute: 4,
			second: 5,
			millisecond: 6,
		};

		const total = (input.week * DDate.millisecondInOneWeek)
			+ (input.day * DDate.millisecondsInOneDay)
			+ (input.hour * DDate.millisecondInOneHour)
			+ (input.minute * DDate.millisecondInOneMinute)
			+ (input.second * DDate.millisecondsInOneSecond)
			+ input.millisecond;

		const result = DDate.createTime(input);

		expect(result).toStrictEqual(
			DEither.right("time-created", `time${total}+`),
		);
		expect(DDate.createTime({})).toStrictEqual(
			DEither.right("time-created", "time0+"),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("creates from ISO time value", () => {
		const input = {
			value: "01:02:03.004",
		};

		const total = (DDate.millisecondInOneHour)
			+ (2 * DDate.millisecondInOneMinute)
			+ (3 * DDate.millisecondsInOneSecond)
			+ 4;

		const result = DDate.createTime(input);

		expect(result).toStrictEqual(
			DEither.right("time-created", `time${total}+`),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("creates from ISO time value without milliseconds", () => {
		const input = {
			value: "02:30:15Z",
		};

		const total = (2 * DDate.millisecondInOneHour)
			+ (30 * DDate.millisecondInOneMinute)
			+ (15 * DDate.millisecondsInOneSecond);

		const result = DDate.createTime(input);

		expect(result).toStrictEqual(
			DEither.right("time-created", `time${total}+`),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("creates from negative ISO time value", () => {
		const input = {
			value: "-10:00",
		};

		const total = 10 * DDate.millisecondInOneHour;
		const result = DDate.createTime(input);

		expect(result).toStrictEqual(
			DEither.right("time-created", `time${total}-`),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("ignores invalid ISO time value and uses other fields", () => {
		const input = {
			value: "invalid",
			minute: 1,
		};

		const total = DDate.millisecondInOneMinute;
		const result = DDate.createTime(input);

		expect(result).toStrictEqual(
			DEither.right("time-created", `time${total}+`),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("creates with negative milliseconds", () => {
		const result = DDate.createTime(-2500);

		expect(result).toStrictEqual(
			DEither.right("time-created", "time2500-"),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("returns an error for NaN", () => {
		const result = DDate.createTime(Number.NaN);

		expect(result).toStrictEqual(
			DEither.left("time-created-error", null),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("returns an error for unsafe time value", () => {
		const result = DDate.createTime(DDate.maxTimeValue);

		expect(result).toStrictEqual(
			DEither.left("time-created-error", null),
		);

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("returns TheTime for TheTime input", () => {
		const result = DDate.createTime("time123+");

		expect(result).toBe("time123+");

		type check = ExpectType<
			typeof result,
			DDate.MayBeTime,
			"strict"
		>;
	});

	it("type safe with createTime", () => {
		DDate.createTime(1, "millisecond");
		DDate.createTime(9007199254740990, "millisecond");
		DDate.createTime(-9007199254740990, "millisecond");

		DDate.createTime(1, "second");
		DDate.createTime(9007199254739, "second");
		DDate.createTime(-9007199254739, "second");

		DDate.createTime(1, "minute");
		DDate.createTime(150119987578, "minute");
		DDate.createTime(-150119987578, "minute");

		DDate.createTime(1, "hour");
		DDate.createTime(2501999791, "hour");
		DDate.createTime(-2501999791, "hour");

		DDate.createTime(1, "day");
		DDate.createTime(104249990, "day");
		DDate.createTime(-104249990, "day");

		DDate.createTime(1, "week");
		DDate.createTime(14892854, "week");
		DDate.createTime(-14892854, "week");

		DDate.createTime(
			// @ts-expect-error expects literal value
			11 as number,
			"second",
		);

		DDate.createTime(
			// @ts-expect-error greater than millisecond limit
			9007199254740992,
			"millisecond",
		);

		DDate.createTime(
			// @ts-expect-error less than millisecond limit
			-9007199254740992,
			"millisecond",
		);

		DDate.createTime(
			// @ts-expect-error greater than second limit
			9007199254741,
			"second",
		);

		DDate.createTime(
			// @ts-expect-error less than second limit
			-9007199254741,
			"second",
		);

		DDate.createTime(
			// @ts-expect-error greater than minute limit
			150119987580,
			"minute",
		);

		DDate.createTime(
			// @ts-expect-error less than minute limit
			-150119987580,
			"minute",
		);

		DDate.createTime(
			// @ts-expect-error greater than hour limit
			2501999793,
			"hour",
		);

		DDate.createTime(
			// @ts-expect-error less than hour limit
			-2501999793,
			"hour",
		);

		DDate.createTime(
			// @ts-expect-error greater than day limit
			104249992,
			"day",
		);

		DDate.createTime(
			// @ts-expect-error less than day limit
			-104249992,
			"day",
		);

		DDate.createTime(
			// @ts-expect-error greater than week limit
			14892856,
			"week",
		);

		DDate.createTime(
			// @ts-expect-error less than week limit
			-14892856,
			"week",
		);
	});
});
