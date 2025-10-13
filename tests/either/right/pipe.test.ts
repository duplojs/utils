import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, success, type EitherFail, rightPipe, type EitherSuccess, right, type EitherRight } from "@scripts/either";

describe("eitherRightPipe", () => {
	it("input either", () => {
		const result = rightPipe(
			success({ value: 10 }),
			({ value }) => success(value),
		);

		expect(result).toStrictEqual(success(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<10>,
			"strict"
		>;
	});

	it("input object", () => {
		const result = rightPipe(
			true
				? { value: 10 }
				: fail(),
			({ value }) => right("result", value),
		);

		expect(result).toStrictEqual(right("result", 10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherRight<"result", number> | EitherFail,
			"strict"
		>;
	});

	it("input either left", () => {
		const result = rightPipe(
			true
				? fail()
				: { value: 10 },
			({ value }) => success(value),
		);

		expect(result).toStrictEqual(fail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number> | EitherFail,
			"strict"
		>;
	});

	it("input object with 6 pipe", () => {
		const result = rightPipe(
			{ value: 10 },
			({ value }) => success(value),
			(value) => value * 2,
			(value) => success(value ^ 4),
			(value) => value - 4,
			(value) => success(value / 2),
			(value) => value + 1,
		);

		expect(result).toStrictEqual(success(7));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object with 6 pipe and one error", () => {
		const result = rightPipe(
			{ value: 10 },
			({ value }) => value,
			(value) => value * 2,
			(value) => true
				? fail()
				: value ^ 4,
			(value) => value - 4,
			(value) => value / 2,
			(value) => success(value + 1),
		);

		expect(result).toStrictEqual(fail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFail | EitherSuccess<number>,
			"strict"
		>;
	});
});

