import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherFail, createEitherFutureError, createEitherFutureSuccess, createEitherOk, createFutureEither, type EitherFail, type EitherFutureError, type EitherFutureSuccess, type EitherOk, FutureEither } from "@scripts/either";

describe("FutureEither", () => {
	it("create instance with promise", async() => {
		const result = new FutureEither(Promise.resolve(1));

		await expect(result).resolves.toStrictEqual(createEitherFutureSuccess(1));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherFutureSuccess<number>,
			"strict"
		>;
	});

	it("create instance with value", async() => {
		const result = new FutureEither(1);

		await expect(result).resolves.toStrictEqual(createEitherFutureSuccess(1));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherFutureSuccess<1>,
			"strict"
		>;
	});

	it("create instance with promise right", async() => {
		const result = new FutureEither(
			Promise.resolve(createEitherOk()),
		);

		await expect(result).resolves.toStrictEqual(createEitherOk());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherOk,
			"strict"
		>;
	});

	it("create instance with right", async() => {
		const result = new FutureEither(createEitherOk());

		await expect(result).resolves.toStrictEqual(createEitherOk());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherOk,
			"strict"
		>;
	});

	it("create instance with left", async() => {
		const result = new FutureEither(createEitherFail());

		await expect(result).resolves.toStrictEqual(createEitherFail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherFail,
			"strict"
		>;
	});

	it("create instance promise error", async() => {
		const result = new FutureEither(Promise.reject(new Error()));

		await expect(result).resolves.toStrictEqual(createEitherFutureError(new Error()));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError,
			"strict"
		>;
	});

	it("instanceof", () => {
		expect(FutureEither.instanceof(Promise.resolve())).toBe(false);

		const error = new FutureEither("test") as unknown;

		const isInstanceOf = FutureEither.instanceof(error);

		expect(isInstanceOf).toBe(true);

		if (isInstanceOf) {
			type check = ExpectType<
				typeof error,
				FutureEither,
				"strict"
			>;
		}
	});

	it("createFutureEither", () => {
		expect(createFutureEither(1)).instanceOf(FutureEither);
	});
});
