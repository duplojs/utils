import { DDataParser, DEither, DDate, pipe, type ExpectType } from "@scripts";
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
			TheTime | number,
			"strict"
		>;

		const value: TheTime = "time10+";

		expect(schema.parse(value)).toStrictEqual(DEither.success(value));
	});

	it("parses safe numbers", () => {
		const schema = DDataParser.time();

		expect(schema.parse(1)).toStrictEqual(DEither.success("time1+"));
		expect(schema.parse(-1)).toStrictEqual(DEither.success("time1-"));
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

	it("rejects invalid inputs", () => {
		const schema = DDataParser.time({ errorMessage: "time.invalid" });
		const outOfRangeTimestamp = DDate.maxTimeValue + 1;
		const invalidType = true;
		const unsafeTheTime = `time${DDate.maxTimeValue}+` as TheTime;

		expect(schema.parse(outOfRangeTimestamp)).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					outOfRangeTimestamp,
				),
			),
		);
		expect(schema.parse(invalidType)).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalidType,
				),
			),
		);
		expect(schema.parse(unsafeTheTime)).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					unsafeTheTime,
				),
			),
		);
	});

	it("does not coerce ISO time when disabled", () => {
		const schema = DDataParser.time({ errorMessage: "time.invalid" });
		const input = "01:02";

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

	it("coerces ISO time inputs", () => {
		const schema = DDataParser.time({ coerce: true });

		expect(schema.parse("01:02")).toStrictEqual(DEither.success("time3720000+"));
		expect(schema.parse("-01:02")).toStrictEqual(DEither.success("time3720000-"));
		expect(schema.parse("12:34:56.789")).toStrictEqual(DEither.success("time45296789+"));
	});

	it("rejects invalid ISO time coercions", () => {
		const schema = DDataParser.time({
			coerce: true,
			errorMessage: "time.invalid",
		});
		const invalidString = "not-a-time";

		const stringResult = schema.parse(invalidString);

		expect(stringResult).toStrictEqual(
			DEither.error(
				DDataParser.addIssue(
					DDataParser.createError(),
					schema,
					invalidString,
				),
			),
		);
	});

	it("rejects ISO time coercion when creation fails", () => {
		const schema = DDataParser.time({
			coerce: true,
			errorMessage: "time.invalid",
		});
		const input = "01:02";
		const createTimeSpy = vi.spyOn(DDate, "createTime")
			.mockReturnValueOnce(DEither.left("time-created-error", null) as never);

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
		expect(createTimeSpy).toHaveBeenCalledWith({ value: input });
		createTimeSpy.mockRestore();
	});

	it("works in pipe", () => {
		const schema = DDataParser.time();

		const result = pipe(1, schema.parse);

		expect(result).toStrictEqual(DEither.success("time1+"));
	});
});
