import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, futureError, futureSuccess, ok, future, type EitherFail, type EitherFutureError, type EitherFutureSuccess, type EitherOk, Future, type FutureEitherAllResult } from "@scripts/either";

describe("FutureEither", () => {
	it("create instance with promise", async() => {
		const result = new Future(Promise.resolve(1));

		expect(await result).toStrictEqual(futureSuccess(1));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherFutureSuccess<number>,
			"strict"
		>;
	});

	it("create instance with value", async() => {
		const result = new Future(1);

		expect(await result).toStrictEqual(futureSuccess(1));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureSuccess<1>,
			"strict"
		>;
	});

	it("create instance with promise right", async() => {
		const result = new Future(
			Promise.resolve(ok()),
		);

		expect(await result).toStrictEqual(ok());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError | EitherOk,
			"strict"
		>;
	});

	it("create instance with right", async() => {
		const result = new Future(ok());

		expect(await result).toStrictEqual(ok());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherOk,
			"strict"
		>;
	});

	it("create instance with left", async() => {
		const result = new Future(fail());

		expect(await result).toStrictEqual(fail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFail,
			"strict"
		>;
	});

	it("create instance promise error", async() => {
		const result = new Future(Promise.reject(new Error()));

		expect(await result).toStrictEqual(futureError(new Error()));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFutureError,
			"strict"
		>;
	});

	it("instanceof", () => {
		expect(Future.instanceof(Promise.resolve())).toBe(false);

		const error = new Future("test") as Future<"test"> | Promise<"toto">;

		const isInstanceOf = Future.instanceof(error);

		expect(isInstanceOf).toBe(true);

		if (isInstanceOf) {
			type check = ExpectType<
				typeof error,
				Future<"test">,
				"strict"
			>;
		}
	});

	it("createFutureEither", () => {
		expect(future(1)).instanceOf(Future);
	});

	it("then", async() => {
		const result = new Future("value")
			.then((value) => {
				type check = ExpectType<
					typeof value,
					EitherFutureSuccess<"value">,
					"strict"
				>;

				return 2;
			});

		expect(await result).toStrictEqual(
			2,
		);

		type check = ExpectType<
			typeof result,
			Promise<number>,
			"strict"
		>;
	});

	it("all", async() => {
		const result = Future.rightAll([
			15,
			Promise.resolve({ test: 15 }),
			new Future("test"),
			Promise.reject(new Error()),
		]);

		expect(await result).toStrictEqual(
			futureSuccess([
				futureSuccess(15),
				futureSuccess({ test: 15 }),
				futureSuccess("test"),
				futureError(new Error()),
			]),
		);

		type check = ExpectType<
			typeof result,
			FutureEitherAllResult<[
				15,
				Promise<{ test: number }>,
				Future<"test">,
				Promise<void>,
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
