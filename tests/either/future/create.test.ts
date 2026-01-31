import { type ExpectType, DEither } from "@scripts";

describe("FutureEither", () => {
	it("create instance with promise", async() => {
		const result = new DEither.Future(Promise.resolve(1));

		expect(await result).toStrictEqual(DEither.futureSuccess(1));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.FutureError | DEither.FutureSuccess<number>,
			"strict"
		>;
	});

	it("create instance with value", async() => {
		const result = new DEither.Future(1);

		expect(await result).toStrictEqual(DEither.futureSuccess(1));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.FutureSuccess<1>,
			"strict"
		>;
	});

	it("create instance with promise right", async() => {
		const result = new DEither.Future(
			Promise.resolve(DEither.ok()),
		);

		expect(await result).toStrictEqual(DEither.ok());

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.FutureError | DEither.Ok,
			"strict"
		>;
	});

	it("create instance with right", async() => {
		const result = new DEither.Future(DEither.ok());

		expect(await result).toStrictEqual(DEither.ok());

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Ok,
			"strict"
		>;
	});

	it("create instance with left", async() => {
		const result = new DEither.Future(DEither.fail());

		expect(await result).toStrictEqual(DEither.fail());

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.Fail,
			"strict"
		>;
	});

	it("create instance promise error", async() => {
		const result = new DEither.Future(Promise.reject(new Error()));

		expect(await result).toStrictEqual(DEither.futureError(new Error()));

		type check = ExpectType<
			Awaited<typeof result>,
			DEither.FutureError,
			"strict"
		>;
	});

	it("instanceof", () => {
		expect(DEither.Future.instanceof(Promise.resolve())).toBe(false);

		const error = new DEither.Future("test") as DEither.Future<"test"> | Promise<"toto">;

		const isInstanceOf = DEither.Future.instanceof(error);

		expect(isInstanceOf).toBe(true);

		if (isInstanceOf) {
			type check = ExpectType<
				typeof error,
				DEither.Future<"test">,
				"strict"
			>;
		}
	});

	it("createFutureEither", () => {
		expect(DEither.future(1)).instanceOf(DEither.Future);
	});

	it("then", async() => {
		const result = new DEither.Future("value")
			.then((value) => {
				type check = ExpectType<
					typeof value,
					DEither.FutureSuccess<"value">,
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
		const result = DEither.Future.rightAll([
			15,
			Promise.resolve({ test: 15 }),
			new DEither.Future("test"),
			Promise.reject(new Error()),
		]);

		expect(await result).toStrictEqual(
			DEither.futureSuccess([
				DEither.futureSuccess(15),
				DEither.futureSuccess({ test: 15 }),
				DEither.futureSuccess("test"),
				DEither.futureError(new Error()),
			]),
		);

		type check = ExpectType<
			typeof result,
			DEither.FutureEitherAllResult<[
				15,
				Promise<{ test: number }>,
				DEither.Future<"test">,
				Promise<never>,
			]>,
			"strict"
		>;

		type check1 = ExpectType<
			Awaited<typeof result>,
			DEither.FutureSuccess<[
				DEither.FutureSuccess<15>,
				DEither.FutureError | DEither.FutureSuccess<{ test: number }>,
				DEither.FutureSuccess<"test">,
				DEither.FutureError,
			]>,
			"strict"
		>;
	});
});
