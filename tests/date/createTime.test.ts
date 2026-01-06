import { type ExpectType, DDate } from "@scripts";

describe("createTime", () => {
	it("creates from milliseconds by default", () => {
		const result = DDate.createTime(5000);

		expect(result).toBe("time5000+");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
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

		expect(result).toBe(`time${total}+`);
		expect(DDate.createTime({})).toBe("time0+");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
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

		expect(result).toBe(`time${total}+`);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
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

		expect(result).toBe(`time${total}+`);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("creates from negative ISO time value", () => {
		const input = {
			value: "-10:00",
		};

		const total = 10 * DDate.millisecondInOneHour;
		const result = DDate.createTime(input);

		expect(result).toBe(`time${total}-`);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
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

		expect(result).toBe(`time${total}+`);

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("creates with negative milliseconds", () => {
		const result = DDate.createTime(-2500);

		expect(result).toBe("time2500-");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});

	it("returns time0+ for NaN", () => {
		const result = DDate.createTime(Number.NaN);

		expect(result).toBe("time0+");

		type check = ExpectType<
			typeof result,
			DDate.TheTime,
			"strict"
		>;
	});
});
