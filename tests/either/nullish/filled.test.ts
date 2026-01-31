import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("EitherNullishFilled", () => {
	const expectedNullishFilled = (value: unknown) => ({
		[`${keyKindPrefix}${DEither.nullishKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.nullishFilledKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "nullish",
		[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
		...wrapValue(value),
	});

	it("create", () => {
		const either = DEither.nullishFilled(10);

		expect(either).toStrictEqual(expectedNullishFilled(10));

		type check = ExpectType<
			typeof either,
			DEither.NullishFilled<10>,
			"strict"
		>;
	});

	it("isEitherNullishFilled return true", () => {
		const either = DEither.nullishFilled(10) as DEither.NullishFilled | DEither.NullishEmpty;

		const predicate = DEither.isNullishFilled(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.NullishFilled,
				"strict"
			>;
		}
	});

	it("isEitherNullishFilled return false", () => {
		const either = DEither.nullishEmpty(null) as DEither.NullishFilled | DEither.NullishEmpty;

		const predicate = DEither.isNullishFilled(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullishFilled match", () => {
		const either = true
			? DEither.nullishFilled(10)
			: DEither.nullishEmpty(null);

		const result = DEither.whenIsNullishFilled(
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
			DEither.NullishEmpty<null> | 10,
			"strict"
		>;
	});

	it("whenEitherIsNullishFilled not match with left", () => {
		const either = DEither.nullishEmpty(null);

		const result = DEither.whenIsNullishFilled(
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
			DEither.NullishEmpty<null>,
			"strict"
		>;
	});

	it("whenEitherIsNullishFilled not match with right", () => {
		const either = true
			? DEither.ok()
			: DEither.nullishFilled(10);

		const result = DEither.whenIsNullishFilled(
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
			DEither.Ok | 10,
			"strict"
		>;
	});

	it("whenEitherIsNullishFilled match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = DEither.whenIsNullishFilled(
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
			DEither.NullishEmpty<null> | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullishFilled not match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = DEither.whenIsNullishFilled(
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

		expect(result).toStrictEqual(DEither.nullishEmpty(null));

		type check = ExpectType<
			typeof result,
			DEither.NullishEmpty<null> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.nullishFilled(true)
				: DEither.nullishEmpty(null),
			DEither.whenIsNullishFilled(
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
			true | DEither.NullishEmpty<null>,
			"strict"
		>;
	});
});
