import { DDataParser, DEither, DDate, type ExpectType } from "@scripts";

describe("DDataParser date", () => {
	it("parses TheDate literals", () => {
		const schema = DDataParser.date();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			DDate.TheDate,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			DDate.TheDate | Date | DDate.SerializedTheDate,
			"strict"
		>;

		const value: DDate.SerializedTheDate = "date10+";

		expect(schema.parse(value)).toStrictEqual(DEither.success(DDate.createOrThrow(value)));
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

	it("coerces supported inputs", () => {
		const schema = DDataParser.date({ coerce: true });
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const existing = DDate.createOrThrow("date42+");
		const beforeChristInput = new Date(Date.UTC(-100, 0, 1));
		const beforeChristExpected = DDate.createOrThrow(beforeChristInput);

		expect(schema.parse(1)).toStrictEqual(DEither.success(DDate.createOrThrow("date1+")));
		expect(schema.parse(-1)).toStrictEqual(DEither.success(DDate.createOrThrow("date1-")));
		expect(schema.parse(nativeDate)).toStrictEqual(DEither.success(DDate.createOrThrow("date1609459200000+")));
		expect(schema.parse(existing)).toStrictEqual(DEither.success(existing));
		expect(schema.parse(beforeChristInput)).toStrictEqual(
			DEither.success(beforeChristExpected),
		);
		expect(schema.parse("1969-01-01")).toStrictEqual(DEither.success(DDate.create("1969-01-01")));
		expect(schema.parse("1970-01-01")).toStrictEqual(DEither.success(DDate.createOrThrow("date0+")));
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
		const invalidType = true;
		const outOfRangeDate = new Date(DDate.maxTimestamp + 1);
		const unsafeTheDate: DDate.SerializedTheDate = `date${DDate.maxTimestamp}+`;

		const timestampResult = schema.parse(outOfRangeTimestamp);
		const monthResult = schema.parse(invalidMonth);
		const dayResult = schema.parse(invalidDay);
		const hourResult = schema.parse(invalidHour);
		const typeResult = schema.parse(invalidType);
		const dateResult = schema.parse(outOfRangeDate);
		const unsafeTheDateResult = schema.parse(unsafeTheDate);

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
		expect(typeResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalidType,
				),
			),
		);
		expect(dateResult).toStrictEqual(
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
});
