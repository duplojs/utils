import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherNullishEmpty, createEitherNullishFilled, type EitherNullishFilled, isEitherNullishEmpty, type NullishValue, type EitherNullishEmpty, whenEitherIsNullishEmpty, createEitherFail, type EitherFail } from "@scripts/either";

describe("EitherNullishEmpty", () => {
	it("create", () => {
		const either = createEitherNullishEmpty();

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
		const either = createEitherNullishEmpty(null) as EitherNullishFilled | EitherNullishEmpty;

		const predicate = isEitherNullishEmpty(either);

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
		const either = createEitherNullishFilled(10) as EitherNullishFilled | EitherNullishEmpty;

		const predicate = isEitherNullishEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullishEmpty match", () => {
		const either = true
			? createEitherNullishEmpty(null)
			: createEitherNullishFilled(true);

		const result = whenEitherIsNullishEmpty(
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
		const either = createEitherNullishFilled(10);

		const result = whenEitherIsNullishEmpty(
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
			? createEitherFail()
			: createEitherNullishEmpty(null);

		const result = whenEitherIsNullishEmpty(
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

		const result = whenEitherIsNullishEmpty(
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

		const result = whenEitherIsNullishEmpty(
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

		expect(result).toStrictEqual(createEitherNullishFilled(10));

		type check = ExpectType<
			typeof result,
			EitherNullishFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createEitherNullishEmpty(null)
				: createEitherNullishFilled(true),
			whenEitherIsNullishEmpty(
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
