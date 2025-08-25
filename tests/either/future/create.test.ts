import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherFail, createEitherFutureError, createEitherFutureSuccess, createEitherOk, createFutureEither, type EitherFail, type EitherFutureError, type EitherFutureSuccess, type EitherOk, FutureEither, type FutureEitherAllResult } from "@scripts/either";

describe("FutureEither", () => {
	it("create instance with promise", async() => {
		const result = new FutureEither(Promise.resolve(1));

		expect(await result).toStrictEqual(createEitherFutureSuccess(1));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherFutureSuccess<number>,
			"strict"
		>;
	});

	it("create instance with value", async() => {
		const result = new FutureEither(1);

		expect(await result).toStrictEqual(createEitherFutureSuccess(1));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureSuccess<1>,
			"strict"
		>;
	});

	it("create instance with promise right", async() => {
		const result = new FutureEither(
			Promise.resolve(createEitherOk()),
		);

		expect(await result).toStrictEqual(createEitherOk());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherOk,
			"strict"
		>;
	});

	it("create instance with right", async() => {
		const result = new FutureEither(createEitherOk());

		expect(await result).toStrictEqual(createEitherOk());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherOk,
			"strict"
		>;
	});

	it("create instance with left", async() => {
		const result = new FutureEither(createEitherFail());

		expect(await result).toStrictEqual(createEitherFail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFail,
			"strict"
		>;
	});

	it("create instance promise error", async() => {
		const result = new FutureEither(Promise.reject(new Error()));

		expect(await result).toStrictEqual(createEitherFutureError(new Error()));

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

	it("then", async() => {
		const result = new FutureEither("value")
			.then((value) => {
				type check = ExpectType<
					typeof value,
					EitherFutureSuccess<"value">,
					"strict"
				>;

				return 2;
			});

		expect(await result).toStrictEqual(
			createEitherFutureSuccess(2),
		);

		type check = ExpectType<
			typeof result,
			FutureEither<2>,
			"strict"
		>;
	});

	it("all", async() => {
		const result = FutureEither.all([
			15,
			Promise.resolve({ test: 15 }),
			new FutureEither("test"),
			Promise.reject(new Error()),
		]);

		expect(await result).toStrictEqual(
			createEitherFutureSuccess([
				createEitherFutureSuccess(15),
				createEitherFutureSuccess({ test: 15 }),
				createEitherFutureSuccess("test"),
				createEitherFutureError(new Error()),
			]),
		);

		type check = ExpectType<
			typeof result,
			FutureEitherAllResult<[
				15,
				Promise<{ test: number }>,
				FutureEither<"test">,
				Promise<never>,
			]>,
			"strict"
		>;

		type check1 = ExpectType<
			Awaited<typeof result>,
			EitherFutureSuccess<[
				EitherFutureSuccess<15>,
				EitherFutureError | EitherFutureSuccess<{ test: number }>,
				EitherFutureSuccess<"test">,
				EitherFutureError,
			]>,
			"strict"
		>;
	});
});
