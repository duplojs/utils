import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import {
	fail,
	type EitherFail,
	nullableEmpty,
	type EitherNullableEmpty,
	isNullableEmpty,
	type EitherNullableFilled,
	nullableFilled,
	whenIsNullableEmpty,
} from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/base";
import { eitherLeftKind } from "@scripts/either/left/create";
import { eitherNullableKind } from "@scripts/either/nullable/base";
import { eitherNullableEmptyKind } from "@scripts/either/nullable/empty";

describe("EitherNullableEmpty", () => {
	it("create", () => {
		const either = nullableEmpty();

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${eitherNullableKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherNullableEmptyKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "nullable",
			[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
			...wrapValue(null),
		});

		type check = ExpectType<
			typeof either,
			EitherNullableEmpty,
			"strict"
		>;
	});

	it("isEitherNullableEmpty return true", () => {
		const either = nullableEmpty() as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isNullableEmpty(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherNullableEmpty,
				"strict"
			>;
		}
	});

	it("isEitherNullableEmpty return false", () => {
		const either = nullableFilled(10) as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isNullableEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullableEmpty match", () => {
		const either = true
			? nullableEmpty()
			: nullableFilled(true);

		const result = whenIsNullableEmpty(
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
			EitherNullableFilled<true> | null,
			"strict"
		>;
	});

	it("whenEitherIsNullableEmpty not match with right", () => {
		const either = nullableFilled(10);

		const result = whenIsNullableEmpty(
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
			EitherNullableFilled<10>,
			"strict"
		>;
	});

	it("whenEitherIsNullableEmpty not match with left", () => {
		const either = true
			? fail()
			: nullableEmpty();

		const result = whenIsNullableEmpty(
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

	it("whenEitherIsNullableEmpty match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = whenIsNullableEmpty(
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
			EitherNullableFilled<10> | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullableEmpty not match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = whenIsNullableEmpty(
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

		expect(result).toStrictEqual(nullableFilled(10));

		type check = ExpectType<
			typeof result,
			EitherNullableFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? nullableEmpty()
				: nullableFilled(true),
			whenIsNullableEmpty(
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
			EitherNullableFilled<true> | null,
			"strict"
		>;
	});
});
