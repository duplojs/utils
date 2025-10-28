import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import {
	nullishEmpty,
	nullishFilled,
	type EitherNullishFilled,
	isNullishEmpty,
	type NullishValue,
	type EitherNullishEmpty,
	whenIsNullishEmpty,
	fail,
	type EitherFail,
} from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/base";
import { eitherLeftKind } from "@scripts/either/left/create";
import { eitherNullishKind } from "@scripts/either/nullish/base";
import { eitherNullishEmptyKind } from "@scripts/either/nullish/empty";

describe("EitherNullishEmpty", () => {
	const expectedNullishEmpty = (value: unknown) => ({
		[`${keyKindPrefix}${eitherNullishKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherNullishEmptyKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "nullish",
		[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
		...wrapValue(value),
	});

	it("create", () => {
		const either = nullishEmpty();

		expect(either).toStrictEqual(expectedNullishEmpty(undefined));

		type check = ExpectType<
			typeof either,
			EitherNullishEmpty<undefined>,
			"strict"
		>;
	});

	it("isEitherNullishEmpty return true", () => {
		const either = nullishEmpty(null) as EitherNullishFilled | EitherNullishEmpty;

		const predicate = isNullishEmpty(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherNullishEmpty<NullishValue>,
				"strict"
			>;
		}
	});

	it("isEitherNullishEmpty return false", () => {
		const either = nullishFilled(10) as EitherNullishFilled | EitherNullishEmpty;

		const predicate = isNullishEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullishEmpty match", () => {
		const either = true
			? nullishEmpty(null)
			: nullishFilled(true);

		const result = whenIsNullishEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(null);

		type check = ExpectType<
			typeof result,
			EitherNullishFilled<true> | null,
			"strict"
		>;
	});

	it("whenEitherIsNullishEmpty not match with right", () => {
		const either = nullishFilled(10);

		const result = whenIsNullishEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					never,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherNullishFilled<10>,
			"strict"
		>;
	});

	it("whenEitherIsNullishEmpty not match with left", () => {
		const either = true
			? fail()
			: nullishEmpty(null);

		const result = whenIsNullishEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherFail | null,
			"strict"
		>;
	});

	it("whenEitherIsNullishEmpty match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = whenIsNullishEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			EitherNullishFilled<10> | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullishEmpty not match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = whenIsNullishEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toStrictEqual(nullishFilled(10));

		type check = ExpectType<
			typeof result,
			EitherNullishFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? nullishEmpty(null)
				: nullishFilled(true),
			whenIsNullishEmpty(
				(value) => {
					type check = ExpectType<
						typeof value,
						null,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(null);

		type check = ExpectType<
			typeof result,
			EitherNullishFilled<true> | null,
			"strict"
		>;
	});
});
