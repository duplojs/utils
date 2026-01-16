import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, futureError, success, future, type EitherFail, type EitherFutureError, rightAsyncPipe, type EitherSuccess, right, type EitherRight } from "@scripts/either";

describe("eitherRightAsyncPipe", () => {
	it("input future", async() => {
		const result = rightAsyncPipe(
			future({ value: 10 }),
			({ value }) => success(value),
		);

		expect(await result).toStrictEqual(success(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number>,
			"strict"
		>;
	});

	it("input future with Promise", async() => {
		const result = rightAsyncPipe(
			future(Promise.resolve({ value: 10 })),
			({ value }) => success(value),
		);

		expect(await result).toStrictEqual(success(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number>,
			"strict"
		>;
	});

	it("input future with Promise error", async() => {
		const result = rightAsyncPipe(
			future(Promise.reject(new Error()) as Promise<{ value: number }>),
			({ value }) => success(value),
		);

		expect(await result).toStrictEqual(futureError(new Error()));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object", async() => {
		const result = rightAsyncPipe(
			true
				? { value: 10 }
				: fail(),
			({ value }) => right("result", value),
		);

		expect(await result).toStrictEqual(right("result", 10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherRight<"result", number> | EitherFail,
			"strict"
		>;
	});

	it("input either left", async() => {
		const result = rightAsyncPipe(
			true
				? fail()
				: { value: 10 },
			({ value }) => value,
		);

		expect(await result).toStrictEqual(fail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number> | EitherFail,
			"strict"
		>;
	});

	it("input object with 6 pipe", async() => {
		const result = rightAsyncPipe(
			true
				? { value: 10 }
				: fail(),
			({ value }) => value,
			(value) => value * 2,
			(value) => future(value ^ 4),
			(value) => Promise.resolve(value - 4),
			(value) => future(value / 2),
			(value) => value + 1,
		);

		expect(await result).toStrictEqual(success(7));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number> | EitherFail | EitherFutureError,
			"strict"
		>;
	});

	it("input object with 6 pipe and one error", async() => {
		const result = rightAsyncPipe(
			{ value: 10 },
			({ value }) => value,
			(value) => value * 2,
			(value) => true
				? fail()
				: value ^ 4,
			(value) => value - 4,
			(value) => success(value / 2),
			(value) => true
				? value + 1
				: fail(),
		);

		expect(await result).toStrictEqual(fail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFail | EitherSuccess<number>,
			"strict"
		>;
	});
});
