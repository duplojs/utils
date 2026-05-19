import { DEither, DDataParser, DDate, type ExpectType } from "@scripts";

const { extended } = DDataParser;

describe("extended.coerce.date", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.extended.coerce.date({
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

		void dataParser;
	});

	it("coerces number, Date and TheDate inputs", () => {
		const parser = extended.coerce.date();
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const existing = DDate.createOrThrow("date42+");

		expect(parser.parse(1)).toStrictEqual(DEither.success(DDate.createOrThrow("date1+")));
		expect(parser.parse(-1)).toStrictEqual(DEither.success(DDate.createOrThrow("date1-")));
		expect(parser.parse(nativeDate)).toStrictEqual(DEither.success(DDate.createOrThrow("date1609459200000+")));
		expect(parser.parse(existing)).toStrictEqual(DEither.success(existing));
	});

	it("rejects unsafe or invalid inputs", () => {
		const parser = extended.coerce.date({ errorMessage: "date.invalid" });
		const tooHigh = DDate.maxTimestamp + 1;
		const invalidDate = new Date(tooHigh);
		const invalidTheDate = `date${DDate.maxTimestamp}+`;
		const invalidType = true;

		expect(parser.parse(tooHigh)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidDate)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidTheDate)).toStrictEqual(DEither.error(expect.any(Object)));
		expect(parser.parse(invalidType)).toStrictEqual(DEither.error(expect.any(Object)));
	});
});
