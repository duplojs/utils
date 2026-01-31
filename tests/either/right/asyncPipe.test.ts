import { type ExpectType, DEither } from "@scripts";

describe("eitherRightAsyncPipe", () => {
	it("input future", async() => {
		const result = DEither.rightAsyncPipe(
			DEither.future({ value: 10 }),
			({ value }) => DEither.success(value),
		);

		expect(await result).toStrictEqual(DEither.success(10));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Success<number>,
			"strict"
		>;
	});

	it("input future with Promise", async() => {
		const result = DEither.rightAsyncPipe(
			DEither.future(Promise.resolve({ value: 10 })),
			({ value }) => DEither.success(value),
		);

		expect(await result).toStrictEqual(DEither.success(10));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.FutureError | DEither.Success<number>,
			"strict"
		>;
	});

	it("input future with Promise error", async() => {
		const result = DEither.rightAsyncPipe(
			DEither.future(Promise.reject(new Error()) as Promise<{ value: number }>),
			({ value }) => DEither.success(value),
		);

		expect(await result).toStrictEqual(DEither.futureError(new Error()));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.FutureError | DEither.Success<number>,
			"strict"
		>;
	});

	it("input object", async() => {
		const result = DEither.rightAsyncPipe(
			true
				? { value: 10 }
				: DEither.fail(),
			({ value }) => DEither.right("result", value),
		);

		expect(await result).toStrictEqual(DEither.right("result", 10));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Right<"result", number> | DEither.Fail,
			"strict"
		>;
	});

	it("input either left", async() => {
		const result = DEither.rightAsyncPipe(
			true
				? DEither.fail()
				: { value: 10 },
			({ value }) => value,
		);

		expect(await result).toStrictEqual(DEither.fail());

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Success<number> | DEither.Fail,
			"strict"
		>;
	});

	it("input object with 6 pipe", async() => {
		const result = DEither.rightAsyncPipe(
			true
				? { value: 10 }
				: DEither.fail(),
			({ value }) => value,
			(value) => value * 2,
			(value) => DEither.future(value ^ 4),
			(value) => Promise.resolve(value - 4),
			(value) => DEither.future(value / 2),
			(value) => value + 1,
		);

		expect(await result).toStrictEqual(DEither.success(7));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Success<number> | DEither.Fail | DEither.FutureError,
			"strict"
		>;
	});

	it("input object with 6 pipe and one error", async() => {
		const result = DEither.rightAsyncPipe(
			{ value: 10 },
			({ value }) => value,
			(value) => value * 2,
			(value) => true
				? DEither.fail()
				: value ^ 4,
			(value) => value - 4,
			(value) => DEither.success(value / 2),
			(value) => true
				? value + 1
				: DEither.fail(),
		);

		expect(await result).toStrictEqual(DEither.fail());

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Fail | DEither.Success<number>,
			"strict"
		>;
	});
});
