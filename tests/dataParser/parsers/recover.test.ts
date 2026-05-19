import { DDataParser, DEither, type ExpectType } from "@scripts";

describe("DDataParser recover", () => {
	it("create data parser with checker", () => {
		const dataParser = DDataParser.recover(DDataParser.number(), 0, {
			checkers: [
				DDataParser.checkerRefine((value) => {
					type check = ExpectType<typeof value, number, "strict">;
					return true;
				}),
			],
		}).addChecker(
			DDataParser.checkerRefine((value) => {
				type check = ExpectType<typeof value, number, "strict">;
				return true;
			}),
		);

		void dataParser;
	});

	it("parses inner value when valid", () => {
		const schema = DDataParser.recover(DDataParser.number(), 12);

		type _CheckOut = ExpectType<
			DDataParser.Output<typeof schema>,
			number,
			"strict"
		>;

		type _CheckIn = ExpectType<
			DDataParser.Input<typeof schema>,
			number,
			"strict"
		>;

		expect(schema.parse(42)).toStrictEqual(DEither.success(42));
	});

	it("recovers value when inner parser fails", () => {
		const schema = DDataParser.recover(
			DDataParser.number({ errorMessage: "not-number" }),
			0,
		);

		expect(schema.parse("invalid")).toStrictEqual(DEither.success(0));
	});

	it("applies checkers on recovered value", () => {
		const schema = DDataParser
			.recover(
				DDataParser.number({ errorMessage: "not-number" }),
				-1,
			)
			.addChecker(
				DDataParser.checkerRefine(
					(value) => value >= 0,
					{ errorMessage: "must-be-positive" },
				),
			);

		expect(schema.parse("invalid")).toStrictEqual(
			DEither.error(
				DDataParser.errorKind.addTo({
					issues: [
						DDataParser.errorIssueKind.addTo({
							expected: "number",
							path: "",
							data: "invalid",
							message: "not-number",
						}),
						DDataParser.errorIssueKind.addTo({
							expected: "value matching refine predicate",
							path: "",
							data: -1,
							message: "must-be-positive",
						}),
					],
					currentPath: [],
				}),
			),
		);
	});

	describe("async", () => {
		it("parses inner value when valid", async() => {
			const schema = DDataParser.recover(DDataParser.number(), 0);

			expect(await schema.asyncParse(42)).toStrictEqual(DEither.success(42));
		});

		it("recovers value when inner parser fails", async() => {
			const schema = DDataParser.recover(DDataParser.number(), 0);

			expect(await schema.asyncParse("invalid")).toStrictEqual(DEither.success(0));
		});

		it("applies checkers on recovered value", async() => {
			const schema = DDataParser
				.recover(
					DDataParser.number({ errorMessage: "not-number" }),
					-1,
				)
				.addChecker(
					DDataParser.checkerRefine(
						(value: number) => value >= 0,
						{ errorMessage: "must-be-positive" },
					),
				);

			expect(await schema.asyncParse("invalid")).toStrictEqual(
				DEither.error(
					DDataParser.errorKind.addTo({
						issues: [
							DDataParser.errorIssueKind.addTo({
								expected: "number",
								path: "",
								data: "invalid",
								message: "not-number",
							}),
							DDataParser.errorIssueKind.addTo({
								expected: "value matching refine predicate",
								path: "",
								data: -1,
								message: "must-be-positive",
							}),
						],
						currentPath: [],
					}),
				),
			);
		});
	});

	describe("isAsynchronous", () => {
		it("returns false when inner parser is sync", () => {
			const schema = DDataParser.recover(DDataParser.number(), 0);

			expect(schema.isAsynchronous()).toBe(false);
		});

		it("returns true when inner parser is async", () => {
			const asyncInner = DDataParser.transform(
				DDataParser.number(),
				async(value) => Promise.resolve(value),
			);
			const schema = DDataParser.recover(asyncInner, 0);

			expect(schema.isAsynchronous()).toBe(true);
		});
	});
});
