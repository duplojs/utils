import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import {
	nullableEmpty,
	type EitherNullableEmpty,
	type EitherNullableFilled,
	nullableFilled,
	isNullableFilled,
	whenIsNullableFilled,
	ok,
	type EitherOk,
} from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/kind";
import { eitherNullableKind } from "@scripts/either/nullable/base";
import { eitherNullableFilledKind } from "@scripts/either/nullable/filled";
import { eitherRightKind } from "@scripts/either/right/create";

describe("EitherNullableFilled", () => {
	it("create", () => {
		const either = nullableFilled(10);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${eitherNullableKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherNullableFilledKind.definition.name}`]: null,
			[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "nullable",
			[`${keyKindPrefix}${eitherRightKind.definition.name}`]: null,
			...wrapValue(10),
		});

		type check = ExpectType<
			typeof either,
			EitherNullableFilled<10>,
			"strict"
		>;
	});

	it("isEitherNullableFilled return true", () => {
		const either = nullableFilled(10) as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isNullableFilled(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherNullableFilled<unknown>,
				"strict"
			>;
		}
	});

	it("isEitherNullableFilled return false", () => {
		const either = nullableEmpty() as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isNullableFilled(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullableFilled match", () => {
		const either = true
			? nullableFilled(10)
			: nullableEmpty();

		const result = whenIsNullableFilled(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			10 | EitherNullableEmpty,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with left", () => {
		const either = nullableEmpty();

		const result = whenIsNullableFilled(
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
			EitherNullableEmpty,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with right", () => {
		const either = true
			? ok()
			: nullableFilled(10);

		const result = whenIsNullableFilled(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherOk | 10,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled match with falsy value", () => {
		const either = true
			? 10
			: null;

		const result = whenIsNullableFilled(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			EitherNullableEmpty | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with truthy value", () => {
		const either = true
			? null
			: 10;

		const result = whenIsNullableFilled(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toStrictEqual(nullableEmpty());

		type check = ExpectType<
			typeof result,
			EitherNullableEmpty | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? nullableFilled(true)
				: nullableEmpty(),
			whenIsNullableFilled(
				(value) => {
					type check = ExpectType<
						typeof value,
						true,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			true | EitherNullableEmpty,
			"strict"
		>;
	});
});
