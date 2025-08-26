import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherNullishEmpty, createEitherNullishFilled, createEitherOk, type EitherNullishEmpty, type EitherNullishFilled, type EitherOk, isEitherNullishFilled, whenEitherIsNullishFilled } from "@scripts/either";

describe("EitherNullishFilled", () => {
	it("create", () => {
		const either = createEitherNullishFilled(10);

		expect(either).toStrictEqual({
			"kind-either-nullish": null,
			"kind-either-filled": null,
			"kind-either-information": "nullish",
			"kind-either-right": null,
			value: 10,
		});

		type check = ExpectType<
			typeof either,
			EitherNullishFilled<10>,
			"strict"
		>;
	});

	it("isEitherNullishFilled return true", () => {
		const either = createEitherNullishFilled(10) as EitherNullishFilled | EitherNullishEmpty;

		const predicate = isEitherNullishFilled(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherNullishFilled,
				"strict"
			>;
		}
	});

	it("isEitherNullishFilled return false", () => {
		const either = createEitherNullishEmpty(null) as EitherNullishFilled | EitherNullishEmpty;

		const predicate = isEitherNullishFilled(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullishFilled match", () => {
		const either = true
			? createEitherNullishFilled(10)
			: createEitherNullishEmpty(null);

		const result = whenEitherIsNullishFilled(
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
			EitherNullishEmpty<null> | 10,
			"strict"
		>;
	});

	it("whenEitherIsNullishFilled not match with left", () => {
		const either = createEitherNullishEmpty(null);

		const result = whenEitherIsNullishFilled(
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
			EitherNullishEmpty<null>,
			"strict"
		>;
	});

	it("whenEitherIsNullishFilled not match with right", () => {
		const either = true
			? createEitherOk()
			: createEitherNullishFilled(10);

		const result = whenEitherIsNullishFilled(
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

	it("whenEitherIsNullishFilled match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = whenEitherIsNullishFilled(
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
			EitherNullishEmpty<null> | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullishFilled not match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = whenEitherIsNullishFilled(
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

		expect(result).toStrictEqual(createEitherNullishEmpty(null));

		type check = ExpectType<
			typeof result,
			EitherNullishEmpty<null> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createEitherNullishFilled(true)
				: createEitherNullishEmpty(null),
			whenEitherIsNullishFilled(
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
			true | EitherNullishEmpty<null>,
			"strict"
		>;
	});
});
