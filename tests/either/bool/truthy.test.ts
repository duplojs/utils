import { wrapValue, keyKindPrefix, pipe, type ExpectType, DEither } from "@scripts";

describe("EitherBoolTruthy", () => {
	const expectedBoolTruthy = (value: unknown) => ({
		[`${keyKindPrefix}${DEither.boolKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.boolTruthyKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "bool",
		[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
		...wrapValue(value),
	});

	it("create", () => {
		const either = DEither.boolTruthy(10);

		expect(either).toStrictEqual(expectedBoolTruthy(10));

		type check = ExpectType<
			typeof either,
			DEither.BoolTruthy<10>,
			"strict"
		>;
	});

	it("isEitherBoolTruthy return true", () => {
		const either = DEither.boolTruthy(10) as DEither.BoolTruthy | DEither.BoolFalsy;

		const predicate = DEither.isBoolTruthy(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.BoolTruthy,
				"strict"
			>;
		}
	});

	it("isEitherBoolTruthy return false", () => {
		const either = DEither.boolFalsy(null) as DEither.BoolTruthy | DEither.BoolFalsy;

		const predicate = DEither.isBoolTruthy(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsBoolTruthy match", () => {
		const either = true
			? DEither.boolTruthy(10)
			: DEither.boolFalsy(null);

		const result = DEither.whenIsBoolTruthy(
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
			DEither.BoolFalsy<null> | 10,
			"strict"
		>;
	});

	it("whenEitherIsBoolTruthy not match with left", () => {
		const either = DEither.boolFalsy(null);

		const result = DEither.whenIsBoolTruthy(
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
			DEither.BoolFalsy<null>,
			"strict"
		>;
	});

	it("whenEitherIsBoolTruthy not match with right", () => {
		const either = true
			? DEither.ok()
			: DEither.boolTruthy(10);

		const result = DEither.whenIsBoolTruthy(
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

	it("whenEitherIsBoolTruthy match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = DEither.whenIsBoolTruthy(
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
			DEither.BoolFalsy<null> | 0,
			"strict"
		>;
	});

	it("whenEitherIsBoolTruthy not match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = DEither.whenIsBoolTruthy(
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

		expect(result).toStrictEqual(DEither.boolFalsy(null));

		type check = ExpectType<
			typeof result,
			DEither.BoolFalsy<null> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.boolTruthy(true)
				: DEither.boolFalsy(null),
			DEither.whenIsBoolTruthy(
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
			DEither.BoolFalsy<null> | true,
			"strict"
		>;
	});
});
