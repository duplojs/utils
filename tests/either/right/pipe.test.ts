import { type ExpectType, DEither } from "@scripts";

describe("eitherRightPipe", () => {
	it("input either", () => {
		const result = DEither.rightPipe(
			DEither.success({ value: 10 }),
			({ value }) => DEither.success(value),
		);

		expect(result).toStrictEqual(DEither.success(10));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Success<10>,
			"strict"
		>;
	});

	it("input object", () => {
		const result = DEither.rightPipe(
			true
				? { value: 10 }
				: DEither.fail(),
			({ value }) => DEither.right("result", value),
		);

		expect(result).toStrictEqual(DEither.right("result", 10));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Right<"result", number> | DEither.Fail,
			"strict"
		>;
	});

	it("input either left", () => {
		const result = DEither.rightPipe(
			true
				? DEither.fail()
				: { value: 10 },
			({ value }) => DEither.success(value),
		);

		expect(result).toStrictEqual(DEither.fail());

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Success<number> | DEither.Fail,
			"strict"
		>;
	});

	it("input object with 6 pipe", () => {
		const result = DEither.rightPipe(
			{ value: 10 },
			({ value }) => DEither.success(value),
			(value) => value * 2,
			(value) => DEither.success(value ^ 4),
			(value) => value - 4,
			(value) => DEither.success(value / 2),
			(value) => value + 1,
		);

		expect(result).toStrictEqual(DEither.success(7));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Success<number>,
			"strict"
		>;
	});

	it("input object with 6 pipe and one error", () => {
		const result = DEither.rightPipe(
			{ value: 10 },
			({ value }) => value,
			(value) => value * 2,
			(value) => true
				? DEither.fail()
				: value ^ 4,
			(value) => value - 4,
			(value) => value / 2,
			(value) => DEither.success(value + 1),
		);

		expect(result).toStrictEqual(DEither.fail());

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Fail | DEither.Success<number>,
			"strict"
		>;
	});
});

