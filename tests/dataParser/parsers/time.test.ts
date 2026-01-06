import { DDataParser, DEither, DDate, type ExpectType } from "@scripts";
import { type TheTime } from "@scripts/date";

describe("DDataParser time", () => {
	it("parses TheTime literals", () => {
		const schema = DDataParser.time();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			TheTime,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			TheTime,
			"strict"
		>;

		const value: TheTime = "time10+";

		expect(schema.parse(value)).toStrictEqual(DEither.success(value));
	});

	it("fails when value does not match TheTime format", () => {
		const schema = DDataParser.time({ errorMessage: "time.invalid" });
		const input = "not-a-time";

		const result = schema.parse(input);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					input,
				),
			),
		);
	});

	it("does not coerce when disabled", () => {
		const schema = DDataParser.time({ errorMessage: "time.invalid" });
		const input = 120;

		const result = schema.parse(input);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					input,
				),
			),
		);
	});

	it("coerces supported inputs", () => {
		const schema = DDataParser.time({ coerce: true });
		const existing: TheTime = "time42+";

		expect(schema.parse(1)).toStrictEqual(DEither.success("time1+"));
		expect(schema.parse(-1)).toStrictEqual(DEither.success("time1-"));
		expect(schema.parse("01:02")).toStrictEqual(DEither.success("time3720000+"));
		expect(schema.parse("-01:02")).toStrictEqual(DEither.success("time3720000-"));
		expect(schema.parse("12:34:56.789")).toStrictEqual(DEither.success("time45296789+"));
		expect(schema.parse(existing)).toStrictEqual(DEither.success(existing));
	});

	it("rejects invalid coercions", () => {
		const schema = DDataParser.time({
			coerce: true,
			errorMessage: "time.invalid",
		});
		const outOfRangeTimestamp = DDate.maxTimestamp + 1;
		const invalidString = "not-a-time";
		const invalidType = true;
		const unsafeTheTime = `time${DDate.maxTimestamp}+` as TheTime;

		const timestampResult = schema.parse(outOfRangeTimestamp);
		const stringResult = schema.parse(invalidString);
		const typeResult = schema.parse(invalidType);
		const unsafeTheTimeResult = schema.parse(unsafeTheTime);

		expect(timestampResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					outOfRangeTimestamp,
				),
			),
		);
		expect(stringResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalidString,
				),
			),
		);
		expect(typeResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalidType,
				),
			),
		);
		expect(unsafeTheTimeResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					unsafeTheTime,
				),
			),
		);
	});
});
