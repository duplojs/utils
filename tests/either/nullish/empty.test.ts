import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("EitherNullishEmpty", () => {
	const expectedNullishEmpty = (value: unknown) => ({
		[`${keyKindPrefix}${DEither.nullishKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.nullishEmptyKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "nullish",
		[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
		...wrapValue(value),
	});

	it("create", () => {
		const either = DEither.nullishEmpty();

		expect(either).toStrictEqual(expectedNullishEmpty(undefined));

		type check = ExpectType<
			typeof either,
			DEither.NullishEmpty<undefined>,
			"strict"
		>;
	});

	it("isEitherNullishEmpty return true", () => {
		const either = DEither.nullishEmpty(null) as DEither.NullishFilled | DEither.NullishEmpty;

		const predicate = DEither.isNullishEmpty(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.NullishEmpty<DEither.NullishValue>,
				"strict"
			>;
		}
	});

	it("isEitherNullishEmpty return false", () => {
		const either = DEither.nullishFilled(10) as DEither.NullishFilled | DEither.NullishEmpty;

		const predicate = DEither.isNullishEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullishEmpty match", () => {
		const either = true
			? DEither.nullishEmpty(null)
			: DEither.nullishFilled(true);

		const result = DEither.whenIsNullishEmpty(
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
			DEither.NullishFilled<true> | null,
			"strict"
		>;
	});

	it("whenEitherIsNullishEmpty not match with right", () => {
		const either = DEither.nullishFilled(10);

		const result = DEither.whenIsNullishEmpty(
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
			DEither.NullishFilled<10>,
			"strict"
		>;
	});

	it("whenEitherIsNullishEmpty not match with left", () => {
		const either = true
			? DEither.fail()
			: DEither.nullishEmpty(null);

		const result = DEither.whenIsNullishEmpty(
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
			DEither.Fail | null,
			"strict"
		>;
	});

	it("whenEitherIsNullishEmpty match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = DEither.whenIsNullishEmpty(
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
			DEither.NullishFilled<10> | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullishEmpty not match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = DEither.whenIsNullishEmpty(
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

		expect(result).toStrictEqual(DEither.nullishFilled(10));

		type check = ExpectType<
			typeof result,
			DEither.NullishFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.nullishEmpty(null)
				: DEither.nullishFilled(true),
			DEither.whenIsNullishEmpty(
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
			DEither.NullishFilled<true> | null,
			"strict"
		>;
	});
});
