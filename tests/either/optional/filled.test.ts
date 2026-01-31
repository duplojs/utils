import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("EitherOptionalFilled", () => {
	it("create", () => {
		const either = DEither.optionalFilled(10);

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${DEither.optionalKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.optionalFilledKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "optional",
			[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
			...wrapValue(10),
		});

		type check = ExpectType<
			typeof either,
			DEither.OptionalFilled<10>,
			"strict"
		>;
	});

	it("isEitherOptionalFilled return true", () => {
		const either = DEither.optionalFilled(10) as DEither.OptionalEmpty | DEither.OptionalFilled;

		const predicate = DEither.isOptionalFilled(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.OptionalFilled<unknown>,
				"strict"
			>;
		}
	});

	it("isEitherOptionalFilled return false", () => {
		const either = DEither.optionalEmpty() as DEither.OptionalEmpty | DEither.OptionalFilled;

		const predicate = DEither.isOptionalFilled(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsOptionalFilled match", () => {
		const either = true
			? DEither.optionalFilled(10)
			: DEither.optionalEmpty();

		const result = DEither.whenIsOptionalFilled(
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
			10 | DEither.OptionalEmpty,
			"strict"
		>;
	});

	it("whenEitherIsOptionalFilled not match with left", () => {
		const either = DEither.optionalEmpty();

		const result = DEither.whenIsOptionalFilled(
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
			DEither.OptionalEmpty,
			"strict"
		>;
	});

	it("whenEitherIsOptionalFilled not match with right", () => {
		const either = true
			? DEither.ok()
			: DEither.optionalFilled(10);

		const result = DEither.whenIsOptionalFilled(
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

	it("whenEitherIsOptionalFilled match with falsy value", () => {
		const either = true
			? 10
			: undefined;

		const result = DEither.whenIsOptionalFilled(
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
			DEither.OptionalEmpty | 0,
			"strict"
		>;
	});

	it("whenEitherIsOptionalFilled not match with truthy value", () => {
		const either = true
			? undefined
			: 10;

		const result = DEither.whenIsOptionalFilled(
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

		expect(result).toStrictEqual(DEither.optionalEmpty());

		type check = ExpectType<
			typeof result,
			DEither.OptionalEmpty | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.optionalFilled(true)
				: DEither.optionalEmpty(),
			DEither.whenIsOptionalFilled(
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
			true | DEither.OptionalEmpty,
			"strict"
		>;
	});
});
