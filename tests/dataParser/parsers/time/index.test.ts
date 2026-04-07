import { DDataParser, DEither, DDate, type ExpectType } from "@scripts";

describe("DDataParser time", () => {
	it("parses TheTime literals", () => {
		const schema = DDataParser.time();

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			DDate.TheTime,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			number | DDate.TheTime | DDate.SerializedTheTime,
			"strict"
		>;

		const value = DDate.createTime(1, "day");

		expect(schema.parse(value)).toStrictEqual(DEither.success(value));
	});

	it("fails when value does not match TheTime format", () => {
		const schema = DDataParser.time({ errorMessage: "time.invalid" });
		const input = "not-a-time";

		const result = schema.parse(input);

		expect(result).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "time",
							path: "",
							data: input,
							message: "time.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	it("coerces supported inputs", () => {
		const schema = DDataParser.time({ coerce: true });
		const existing = DDate.createTime(1, "day");

		expect(schema.parse(1)).toStrictEqual(DEither.success(DDate.createTime(1, "millisecond")));
		expect(schema.parse(-1)).toStrictEqual(DEither.success(DDate.createTime(-1, "millisecond")));
		expect(schema.parse("01:02")).toStrictEqual(DEither.success(DDate.createTimeOrThrow("time3720000+")));
		expect(schema.parse("-01:02")).toStrictEqual(DEither.success(DDate.createTimeOrThrow(("time3720000-"))));
		expect(schema.parse("12:34:56.789")).toStrictEqual(DEither.success(DDate.createTimeOrThrow("time45296789+")));
		expect(schema.parse(existing)).toStrictEqual(DEither.success(existing));
	});

	it("rejects invalid coercions", () => {
		const schema = DDataParser.time({
			coerce: true,
			errorMessage: "time.invalid",
		});
		const outOfRangeTimestamp = DDate.maxTimeValue + 1;
		const invalidString = "not-a-time";
		const invalidType = true;
		const unsafeTheTime = `time${DDate.maxTimeValue}+` as DDate.SerializedTheTime;

		const timestampResult = schema.parse(outOfRangeTimestamp);
		const stringResult = schema.parse(invalidString);
		const typeResult = schema.parse(invalidType);
		const unsafeTheTimeResult = schema.parse(unsafeTheTime);

		expect(timestampResult).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "time",
							path: "",
							data: outOfRangeTimestamp,
							message: "time.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
		expect(stringResult).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "time",
							path: "",
							data: invalidString,
							message: "time.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
		expect(typeResult).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "time",
							path: "",
							data: invalidType,
							message: "time.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
		expect(unsafeTheTimeResult).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "time",
							path: "",
							data: unsafeTheTime,
							message: "time.invalid",
						}),
					],
					currentPath: [],
				}),
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
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "time",
							path: "",
							data: input,
							message: "time.invalid",
						}),
					],
					currentPath: [],
				}),
			),
		);
		expect(createTimeSpy).toHaveBeenCalledWith({ value: input });
		createTimeSpy.mockRestore();
	});
});
