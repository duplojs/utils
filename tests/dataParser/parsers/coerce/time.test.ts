import { DEither, DDataParser, DDate } from "@scripts";

describe("coerce.time", () => {
	it("coerces number, TheTime and ISO time inputs", () => {
		const parser = DDataParser.coerce.time();
		const existing = DDate.createTime(1, "minute");

		expect(parser.parse(1)).toStrictEqual((DEither.success(DDate.createTime(1, "millisecond"))));
		expect(parser.parse(-1)).toStrictEqual(DEither.success(DDate.createTime(-1, "millisecond")));
		expect(parser.parse("01:02")).toStrictEqual(DEither.success(DDate.createTimeOrThrow("time3720000+")));
		expect(parser.parse(existing)).toStrictEqual(DEither.success(existing));
	});

	it("rejects unsafe or invalid inputs", () => {
		const parser = DDataParser.coerce.time({ errorMessage: "time.invalid" });
		const tooHigh = DDate.maxTimeValue + 1;
		const invalidTheTime = `time${DDate.maxTimeValue}+` as DDate.SerializedTheTime;
		const invalidType = true;
		const invalidString = "not-a-time";

		expect(parser.parse(tooHigh)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidTheTime)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidType)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidString)).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
