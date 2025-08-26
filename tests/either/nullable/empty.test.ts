import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherFail, type EitherFail, createEitherNullableEmpty, type EitherNullableEmpty, isEitherNullableEmpty, type EitherNullableFilled, createEitherNullableFilled, whenEitherIsNullableEmpty } from "@scripts/either";

describe("EitherNullableEmpty", () => {
	it("create", () => {
		const either = createEitherNullableEmpty();

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
		const either = createEitherNullableEmpty() as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isEitherNullableEmpty(either);

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
		const either = createEitherNullableFilled(10) as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isEitherNullableEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullableEmpty match", () => {
		const either = true
			? createEitherNullableEmpty()
			: createEitherNullableFilled(true);

		const result = whenEitherIsNullableEmpty(
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
		const either = createEitherNullableFilled(10);

		const result = whenEitherIsNullableEmpty(
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
			? createEitherFail()
			: createEitherNullableEmpty();

		const result = whenEitherIsNullableEmpty(
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

		const result = whenEitherIsNullableEmpty(
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

		const result = whenEitherIsNullableEmpty(
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

		expect(result).toStrictEqual(createEitherNullableFilled(10));

		type check = ExpectType<
			typeof result,
			EitherNullableFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createEitherNullableEmpty()
				: createEitherNullableFilled(true),
			whenEitherIsNullableEmpty(
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
