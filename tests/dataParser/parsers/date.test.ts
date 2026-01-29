import { DDataParser, DEither, DDate, pipe, type ExpectType } from "@scripts";
import { type TheDate } from "@scripts/date";

describe("DDataParser date", () => {
	it("parses TheDate literals", () => {
		const schema = DDataParser.date();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			TheDate,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			TheDate | Date,
			"strict"
		>;

		const value: TheDate = "date10+";

		expect(schema.parse(value)).toStrictEqual(DEither.success(value));
	});

	it("parses Date instances", () => {
		const schema = DDataParser.date();
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const beforeChristInput = new Date(Date.UTC(-100, 0, 1));
		const beforeChristExpected = DDate.createOrThrow(beforeChristInput);

		expect(schema.parse(nativeDate)).toStrictEqual(DEither.success("date1609459200000+"));
		expect(schema.parse(beforeChristInput)).toStrictEqual(
			DEither.success(beforeChristExpected),
		);
	});

	it("fails when value does not match TheDate format", () => {
		const schema = DDataParser.date({ errorMessage: "date.invalid" });
		const input = "not-a-date";

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

	it("rejects invalid Date inputs", () => {
		const schema = DDataParser.date({ errorMessage: "date.invalid" });
		const outOfRangeDate = new Date(DDate.maxTimestamp + 1);
		const unsafeTheDate = `date${DDate.maxTimestamp}+` as TheDate;

		const outOfRangeResult = schema.parse(outOfRangeDate);
		const unsafeTheDateResult = schema.parse(unsafeTheDate);

		expect(outOfRangeResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					outOfRangeDate,
				),
			),
		);
		expect(unsafeTheDateResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					unsafeTheDate,
				),
			),
		);
	});

	it("does not coerce when disabled", () => {
		const schema = DDataParser.date({ errorMessage: "date.invalid" });
		const input = 1;

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
		const schema = DDataParser.date({ coerce: true });

		expect(schema.parse(1)).toStrictEqual(DEither.success("date1+"));
		expect(schema.parse(-1)).toStrictEqual(DEither.success("date1-"));
		expect(schema.parse("1969-01-01")).toStrictEqual(DEither.success("date31536000000-"));
		expect(schema.parse("1970-01-01")).toStrictEqual(DEither.success("date0+"));
	});

	it("rejects invalid coercions", () => {
		const schema = DDataParser.date({
			coerce: true,
			errorMessage: "date.invalid",
		});
		const outOfRangeTimestamp = DDate.maxTimestamp + 1;
		const invalidMonth = "2021y-13m-1d";
		const invalidDay = "2021y-2m-30d";
		const invalidHour = "2021y-1m-1d-25h";

		const timestampResult = schema.parse(outOfRangeTimestamp);
		const monthResult = schema.parse(invalidMonth);
		const dayResult = schema.parse(invalidDay);
		const hourResult = schema.parse(invalidHour);
		const bigint = schema.parse(12n);

		expect(timestampResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					outOfRangeTimestamp,
				),
			),
		);
		expect(monthResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalidMonth,
				),
			),
		);
		expect(dayResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalidDay,
				),
			),
		);
		expect(hourResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalidHour,
				),
			),
		);
		expect(bigint).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					12n,
				),
			),
		);
	});

	it("works in pipe", () => {
		const schema = DDataParser.date();
		const input = new Date("2021-01-01T00:00:00.000Z");

		const result = pipe(input, schema.parse);

		expect(result).toStrictEqual(DEither.success("date1609459200000+"));
	});
});
