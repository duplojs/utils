import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("EitherNullableEmpty", () => {
	it("create", () => {
		const either = DEither.nullableEmpty();

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${DEither.nullableKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.nullableEmptyKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "nullable",
			[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
			...wrapValue(null),
		});

		type check = ExpectType<
			typeof either,
			DEither.NullableEmpty,
			"strict"
		>;
	});

	it("isEitherNullableEmpty return true", () => {
		const either = DEither.nullableEmpty() as DEither.NullableEmpty | DEither.NullableFilled;

		const predicate = DEither.isNullableEmpty(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.NullableEmpty,
				"strict"
			>;
		}
	});

	it("isEitherNullableEmpty return false", () => {
		const either = DEither.nullableFilled(10) as DEither.NullableEmpty | DEither.NullableFilled;

		const predicate = DEither.isNullableEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullableEmpty match", () => {
		const either = true
			? DEither.nullableEmpty()
			: DEither.nullableFilled(true);

		const result = DEither.whenIsNullableEmpty(
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
			DEither.NullableFilled<true> | null,
			"strict"
		>;
	});

	it("whenEitherIsNullableEmpty not match with right", () => {
		const either = DEither.nullableFilled(10);

		const result = DEither.whenIsNullableEmpty(
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
			DEither.NullableFilled<10>,
			"strict"
		>;
	});

	it("whenEitherIsNullableEmpty not match with left", () => {
		const either = true
			? DEither.fail()
			: DEither.nullableEmpty();

		const result = DEither.whenIsNullableEmpty(
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

	it("whenEitherIsNullableEmpty match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = DEither.whenIsNullableEmpty(
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
			DEither.NullableFilled<10> | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullableEmpty not match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = DEither.whenIsNullableEmpty(
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

		expect(result).toStrictEqual(DEither.nullableFilled(10));

		type check = ExpectType<
			typeof result,
			DEither.NullableFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.nullableEmpty()
				: DEither.nullableFilled(true),
			DEither.whenIsNullableEmpty(
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
			DEither.NullableFilled<true> | null,
			"strict"
		>;
	});
});
