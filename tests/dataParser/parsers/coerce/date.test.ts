import { DEither, DDataParser, DDate } from "@scripts";

describe("coerce.date", () => {
	it("coerces number, Date and TheDate inputs", () => {
		const parser = DDataParser.coerce.date();
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const existing: DDate.TheDate = "date42+";

		expect(parser.parse(1)).toStrictEqual(DEither.success("date1+"));
		expect(parser.parse(-1)).toStrictEqual(DEither.success("date1-"));
		expect(parser.parse(nativeDate)).toStrictEqual(DEither.success("date1609459200000+"));
		expect(parser.parse(existing)).toStrictEqual(DEither.success(existing));
	});

	it("rejects unsafe or invalid inputs", () => {
		const parser = DDataParser.coerce.date({ errorMessage: "date.invalid" });
		const tooHigh = DDate.maxTimestamp + 1;
		const invalidDate = new Date(tooHigh);
		const invalidTheDate = `date${DDate.maxTimestamp}+` as DDate.TheDate;
		const invalidType = true;

		expect(parser.parse(tooHigh)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidDate)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidTheDate)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidType)).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
