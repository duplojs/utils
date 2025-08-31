import { type ExpectType } from "@scripts/common/types/expectType";
import { createFail, createSuccess, type EitherFail, rightPipe, type EitherSuccess } from "@scripts/either";

describe("eitherRightPipe", () => {
	it("input either", () => {
		const result = rightPipe(
			createSuccess({ value: 10 }),
			({ value }) => createSuccess(value),
		);

		expect(result).toStrictEqual(createSuccess(10));

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
				: createFail(),
			({ value }) => createSuccess(value),
		);

		expect(result).toStrictEqual(createSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<10> | EitherFail,
			"strict"
		>;
	});

	it("input object with 6 pipe", () => {
		const result = rightPipe(
			{ value: 10 },
			({ value }) => createSuccess(value),
			(value) => createSuccess(value * 2),
			(value) => createSuccess(value ^ 4),
			(value) => createSuccess(value - 4),
			(value) => createSuccess(value / 2),
			(value) => createSuccess(value + 1),
		);

		expect(result).toStrictEqual(createSuccess(7));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object with 6 pipe and one error", () => {
		const result = rightPipe(
			{ value: 10 },
			({ value }) => createSuccess(value),
			(value) => createSuccess(value * 2),
			(value) => true
				? createFail()
				: createSuccess(value ^ 4),
			(value) => createSuccess(value - 4),
			(value) => createSuccess(value / 2),
			(value) => createSuccess(value + 1),
		);

		expect(result).toStrictEqual(createFail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFail | EitherSuccess<number>,
			"strict"
		>;
	});
});

