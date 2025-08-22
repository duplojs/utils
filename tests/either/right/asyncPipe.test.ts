import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherFail, createEitherFutureError, createEitherSuccess, createFutureEither, type EitherError, type EitherFail, type EitherFutureError, eitherRightAsyncPipe, type EitherSuccess } from "@scripts/either";

describe("eitherRightAsyncPipe", () => {
	it("input future", async() => {
		const result = eitherRightAsyncPipe(
			createFutureEither({ value: 10 }),
			({ value }) => createEitherSuccess(value),
		);

		await expect(result).resolves.toStrictEqual(createEitherSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number>,
			"strict"
		>;
	});

	it("input future with Promise", async() => {
		const result = eitherRightAsyncPipe(
			createFutureEither(Promise.resolve({ value: 10 })),
			({ value }) => createEitherSuccess(value),
		);

		await expect(result).resolves.toStrictEqual(createEitherSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number>,
			"strict"
		>;
	});

	it("input future with Promise error", async() => {
		const result = eitherRightAsyncPipe(
			createFutureEither(Promise.reject(new Error()) as Promise<{ value: number }>),
			({ value }) => createEitherSuccess(value),
		);

		await expect(result).resolves.toStrictEqual(createEitherFutureError(new Error()));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object", async() => {
		const result = eitherRightAsyncPipe(
			{ value: 10 },
			({ value }) => createEitherSuccess(value),
		);

		await expect(result).resolves.toStrictEqual(createEitherSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object with 6 pipe", async() => {
		const result = eitherRightAsyncPipe(
			true
				? { value: 10 }
				: createEitherFail(),
			({ value }) => createEitherSuccess(value),
			(value) => createEitherSuccess(value * 2),
			(value) => createFutureEither(value ^ 4),
			(value) => createEitherSuccess(value - 4),
			(value) => createFutureEither(value / 2),
			(value) => createEitherSuccess(value + 1),
		);

		await expect(result).resolves.toStrictEqual(createEitherSuccess(7));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherSuccess<number> | EitherFail,
			"strict"
		>;
	});

	it("input object with 6 pipe and one error", async() => {
		const result = eitherRightAsyncPipe(
			{ value: 10 },
			({ value }) => createFutureEither(value),
			(value) => createEitherSuccess(value * 2),
			(value) => true
				? createEitherFail()
				: createEitherSuccess(value ^ 4),
			(value) => createEitherSuccess(value - 4),
			(value) => createFutureEither(value / 2),
			(value) => createEitherSuccess(value + 1),
		);

		await expect(result).resolves.toStrictEqual(createEitherFail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherFail | EitherSuccess<number>,
			"strict"
		>;
	});
});

