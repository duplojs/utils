import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherFail, createEitherSuccess, type EitherFail, eitherRightPipe, type EitherSuccess } from "@scripts/either";

describe("eitherRightPipe", () => {
	it("input either", () => {
		const result = eitherRightPipe(
			createEitherSuccess({ value: 10 }),
			({ value }) => createEitherSuccess(value),
		);

		expect(result).toStrictEqual(createEitherSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object", () => {
		const result = eitherRightPipe(
			true
				? { value: 10 }
				: createEitherFail(),
			({ value }) => createEitherSuccess(value),
		);

		expect(result).toStrictEqual(createEitherSuccess(10));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number> | EitherFail,
			"strict"
		>;
	});

	it("input object with 6 pipe", () => {
		const result = eitherRightPipe(
			{ value: 10 },
			({ value }) => createEitherSuccess(value),
			(value) => createEitherSuccess(value * 2),
			(value) => createEitherSuccess(value ^ 4),
			(value) => createEitherSuccess(value - 4),
			(value) => createEitherSuccess(value / 2),
			(value) => createEitherSuccess(value + 1),
		);

		expect(result).toStrictEqual(createEitherSuccess(7));

		type check = ExpectType<
			Awaited<typeof result>,
			EitherSuccess<number>,
			"strict"
		>;
	});

	it("input object with 6 pipe and one error", () => {
		const result = eitherRightPipe(
			{ value: 10 },
			({ value }) => createEitherSuccess(value),
			(value) => createEitherSuccess(value * 2),
			(value) => true
				? createEitherFail()
				: createEitherSuccess(value ^ 4),
			(value) => createEitherSuccess(value - 4),
			(value) => createEitherSuccess(value / 2),
			(value) => createEitherSuccess(value + 1),
		);

		expect(result).toStrictEqual(createEitherFail());

		type check = ExpectType<
			Awaited<typeof result>,
			EitherFail | EitherSuccess<number>,
			"strict"
		>;
	});
});

