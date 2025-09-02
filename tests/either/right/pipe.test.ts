import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, success, type EitherFail, rightPipe, type EitherSuccess } from "@scripts/either";

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
			({ value }) => success(value),
		);

		expect(result).toStrictEqual(success(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<10> | EitherFail,
			"strict"
		>;
	});

	it("input object with 6 pipe", () => {
		const result = rightPipe(
			{ value: 10 },
			({ value }) => success(value),
			(value) => success(value * 2),
			(value) => success(value ^ 4),
			(value) => success(value - 4),
			(value) => success(value / 2),
			(value) => success(value + 1),
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
			({ value }) => success(value),
			(value) => success(value * 2),
			(value) => true
				? fail()
				: success(value ^ 4),
			(value) => success(value - 4),
			(value) => success(value / 2),
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

