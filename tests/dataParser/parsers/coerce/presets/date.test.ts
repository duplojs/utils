import { DEither, DDataParser, DDate, type ExpectType } from "@scripts";

describe("coerce.date", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.coerce.date({
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<
						typeof value,
						DDate.TheDate,
						"strict"
					>;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<
					typeof value,
					DDate.TheDate,
					"strict"
				>;
				return true;
			}),
		);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof dataParser>,
			DDate.TheDate,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof dataParser>,
			DDate.TheDate | Date | string | number,
			"strict"
		>;

		void dataParser;
	});

	it("coerces number, string, Date and TheDate inputs", () => {
		const parser = DDataParser.coerce.date();
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const existing = DDate.create("2021-01-01");
		const expected = DDate.createOrThrow("date1609459200000+");

		expect(parser.parse(1609459200000)).toStrictEqual(DEither.success(expected));
		expect(parser.parse("2021-01-01")).toStrictEqual(DEither.success(expected));
		expect(parser.parse(nativeDate)).toStrictEqual(DEither.success(expected));
		expect(parser.parse(existing)).toStrictEqual(DEither.success(existing));
	});

	it("rejects unsafe or invalid inputs", () => {
		const parser = DDataParser.coerce.date({ errorMessage: "date.invalid" });
		const tooHigh = DDate.maxTimestamp + 1;
		const invalidDate = new Date(tooHigh);
		const invalidTheDate = `date${DDate.maxTimestamp}+` as DDate.SerializedTheDate;
		const invalidType = true;
		const invalidString = "not-a-date";

		expect(parser.parse(tooHigh)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidDate)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidTheDate)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidType)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidString)).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
