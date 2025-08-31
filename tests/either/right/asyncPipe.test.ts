import { type ExpectType } from "@scripts/common/types/expectType";
import { createFail, createFutureError, createSuccess, createFuture, type EitherError, type EitherFail, type EitherFutureError, rightAsyncPipe, type EitherSuccess } from "@scripts/either";

describe("eitherRightAsyncPipe", () => {
	it("input future", async() => {
		const result = rightAsyncPipe(
			createFuture({ value: 10 }),
			({ value }) => createSuccess(value),
		);

		expect(await result).toStrictEqual(createSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<10>,
			"strict"
		>;
	});

	it("input future with Promise", async() => {
		const result = rightAsyncPipe(
			createFuture(Promise.resolve({ value: 10 })),
			({ value }) => createSuccess(value),
		);

		expect(await result).toStrictEqual(createSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number>,
			"strict"
		>;
	});

	it("input future with Promise error", async() => {
		const result = rightAsyncPipe(
			createFuture(Promise.reject(new Error()) as Promise<{ value: number }>),
			({ value }) => createSuccess(value),
		);

		expect(await result).toStrictEqual(createFutureError(new Error()));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object", async() => {
		const result = rightAsyncPipe(
			{ value: 10 },
			({ value }) => createSuccess(value),
		);

		expect(await result).toStrictEqual(createSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object with 6 pipe", async() => {
		const result = rightAsyncPipe(
			true
				? { value: 10 }
				: createFail(),
			({ value }) => createSuccess(value),
			(value) => createSuccess(value * 2),
			(value) => createFuture(value ^ 4),
			(value) => createSuccess(value - 4),
			(value) => createFuture(value / 2),
			(value) => createSuccess(value + 1),
		);

		expect(await result).toStrictEqual(createSuccess(7));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number> | EitherFail,
			"strict"
		>;
	});

	it("input object with 6 pipe and one error", async() => {
		const result = rightAsyncPipe(
			{ value: 10 },
			({ value }) => createFuture(value),
			(value) => createSuccess(value * 2),
			(value) => true
				? createFail()
				: createSuccess(value ^ 4),
			(value) => createSuccess(value - 4),
			(value) => createFuture(value / 2),
			(value) => createSuccess(value + 1),
		);

		expect(await result).toStrictEqual(createFail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFail | EitherSuccess<number>,
			"strict"
		>;
	});
});

