import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("EitherOptionalEmpty", () => {
	it("create", () => {
		const either = DEither.optionalEmpty();

		expect(either).toStrictEqual({
			[`${keyKindPrefix}${DEither.optionalKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.optionalEmptyKind.definition.name}`]: null,
			[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "optional",
			[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
			...wrapValue(undefined),
		});

		type check = ExpectType<
			typeof either,
			DEither.OptionalEmpty,
			"strict"
		>;
	});

	it("isEitherOptionalEmpty return true", () => {
		const either = DEither.optionalEmpty() as DEither.OptionalEmpty | DEither.OptionalFilled;

		const predicate = DEither.isOptionalEmpty(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.OptionalEmpty,
				"strict"
			>;
		}
	});

	it("isEitherOptionalEmpty return false", () => {
		const either = DEither.optionalFilled(10) as DEither.OptionalEmpty | DEither.OptionalFilled;

		const predicate = DEither.isOptionalEmpty(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsOptionalEmpty match", () => {
		const either = true
			? DEither.optionalEmpty()
			: DEither.optionalFilled(true);

		const result = DEither.whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(undefined);

		type check = ExpectType<
			typeof result,
			DEither.OptionalFilled<true> | undefined,
			"strict"
		>;
	});

	it("whenEitherIsOptionalEmpty not match with right", () => {
		const either = DEither.optionalFilled(10);

		const result = DEither.whenIsOptionalEmpty(
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
			DEither.OptionalFilled<10>,
			"strict"
		>;
	});

	it("whenEitherIsOptionalEmpty not match with left", () => {
		const either = true
			? DEither.fail()
			: DEither.optionalEmpty();

		const result = DEither.whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			DEither.Fail | undefined,
			"strict"
		>;
	});

	it("whenEitherIsOptionalEmpty match with falsy value", () => {
		const either = true
			? undefined
			: 10;

		const result = DEither.whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			DEither.OptionalFilled<10> | 0,
			"strict"
		>;
	});

	it("whenEitherIsOptionalEmpty not match with truthy value", () => {
		const either = true
			? 10
			: undefined;

		const result = DEither.whenIsOptionalEmpty(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toStrictEqual(DEither.optionalFilled(10));

		type check = ExpectType<
			typeof result,
			DEither.OptionalFilled<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.optionalEmpty()
				: DEither.optionalFilled(true),
			DEither.whenIsOptionalEmpty(
				(value) => {
					type check = ExpectType<
						typeof value,
						undefined,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(undefined);

		type check = ExpectType<
			typeof result,
			DEither.OptionalFilled<true> | undefined,
			"strict"
		>;
	});
});
