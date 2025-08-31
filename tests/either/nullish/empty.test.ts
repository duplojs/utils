import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createNullishEmpty, createNullishFilled, type EitherNullishFilled, isNullishEmpty, type NullishValue, type EitherNullishEmpty, whenIsNullishEmpty, createFail, type EitherFail } from "@scripts/either";

describe("EitherNullishEmpty", () => {
	it("create", () => {
		const either = createNullishEmpty();

		expect(either).toStrictEqual({
			"kind-either-nullish": null,
			"kind-either-empty": null,
			"kind-either-information": "nullish",
			"kind-either-left": null,
			value: undefined,
		});

		type check = ExpectType<
			typeof either,
			EitherNullishEmpty<undefined>,
			"strict"
		>;
	});

	it("isEitherNullishEmpty return true", () => {
		const either = createNullishEmpty(null) as EitherNullishFilled | EitherNullishEmpty;

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
		const either = createNullishFilled(10) as EitherNullishFilled | EitherNullishEmpty;

		const predicate = isNullishEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullishEmpty match", () => {
		const either = true
			? createNullishEmpty(null)
			: createNullishFilled(true);

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
		const either = createNullishFilled(10);

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
			? createFail()
			: createNullishEmpty(null);

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

		expect(result).toStrictEqual(createNullishFilled(10));

		type check = ExpectType<
			typeof result,
			EitherNullishFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createNullishEmpty(null)
				: createNullishFilled(true),
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
