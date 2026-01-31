import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("EitherNullableFilled", () => {
	it("create", () => {
		const either = DEither.nullableFilled(10);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${DEither.nullableKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.nullableFilledKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "nullable",
			[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
			...wrapValue(10),
		});

		type check = ExpectType<
			typeof either,
			DEither.NullableFilled<10>,
			"strict"
		>;
	});

	it("isEitherNullableFilled return true", () => {
		const either = DEither.nullableFilled(10) as DEither.NullableEmpty | DEither.NullableFilled;

		const predicate = DEither.isNullableFilled(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.NullableFilled<unknown>,
				"strict"
			>;
		}
	});

	it("isEitherNullableFilled return false", () => {
		const either = DEither.nullableEmpty() as DEither.NullableEmpty | DEither.NullableFilled;

		const predicate = DEither.isNullableFilled(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullableFilled match", () => {
		const either = true
			? DEither.nullableFilled(10)
			: DEither.nullableEmpty();

		const result = DEither.whenIsNullableFilled(
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
			10 | DEither.NullableEmpty,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with left", () => {
		const either = DEither.nullableEmpty();

		const result = DEither.whenIsNullableFilled(
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
			DEither.NullableEmpty,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with right", () => {
		const either = true
			? DEither.ok()
			: DEither.nullableFilled(10);

		const result = DEither.whenIsNullableFilled(
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

	it("whenEitherIsNullableFilled match with falsy value", () => {
		const either = true
			? 10
			: null;

		const result = DEither.whenIsNullableFilled(
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
			DEither.NullableEmpty | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with truthy value", () => {
		const either = true
			? null
			: 10;

		const result = DEither.whenIsNullableFilled(
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

		expect(result).toStrictEqual(DEither.nullableEmpty());

		type check = ExpectType<
			typeof result,
			DEither.NullableEmpty | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.nullableFilled(true)
				: DEither.nullableEmpty(),
			DEither.whenIsNullableFilled(
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
			true | DEither.NullableEmpty,
			"strict"
		>;
	});
});
