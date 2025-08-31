import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createFail, type EitherFail, createNullableEmpty, type EitherNullableEmpty, isNullableEmpty, type EitherNullableFilled, createNullableFilled, whenIsNullableEmpty } from "@scripts/either";

describe("EitherNullableEmpty", () => {
	it("create", () => {
		const either = createNullableEmpty();

		expect(either).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "nullable",
			"kind-either-left": null,
			"kind-either-nullable": null,
			value: null,
		});

		type check = ExpectType<
			typeof either,
			EitherNullableEmpty,
			"strict"
		>;
	});

	it("isEitherNullableEmpty return true", () => {
		const either = createNullableEmpty() as EitherNullableEmpty | EitherNullableFilled;

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
		const either = createNullableFilled(10) as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isNullableEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullableEmpty match", () => {
		const either = true
			? createNullableEmpty()
			: createNullableFilled(true);

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
		const either = createNullableFilled(10);

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
			? createFail()
			: createNullableEmpty();

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

		expect(result).toStrictEqual(createNullableFilled(10));

		type check = ExpectType<
			typeof result,
			EitherNullableFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createNullableEmpty()
				: createNullableFilled(true),
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
