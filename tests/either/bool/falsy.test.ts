import { wrapValue, keyKindPrefix, pipe, type ExpectType, DEither } from "@scripts";

describe("EitherBoolFalsy", () => {
	const expectedBoolFalsy = (value: unknown) => ({
		[`${keyKindPrefix}${DEither.boolKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.boolFalsyKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "bool",
		[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
		...wrapValue(value),
	});

	it("create", () => {
		const either = DEither.boolFalsy(undefined);

		expect(either).toStrictEqual(expectedBoolFalsy(undefined));

		type check = ExpectType<
			typeof either,
			DEither.BoolFalsy<undefined>,
			"strict"
		>;
	});

	it("isEitherBoolFalsy return true", () => {
		const either = DEither.boolFalsy(undefined) as DEither.BoolFalsy | DEither.BoolTruthy;

		const predicate = DEither.isBoolFalsy(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				DEither.BoolFalsy,
				"strict"
			>;
		}
	});

	it("isEitherBoolFalsy return false", () => {
		const either = DEither.boolTruthy(10) as DEither.BoolFalsy | DEither.BoolTruthy;

		const predicate = DEither.isBoolFalsy(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsBoolFalsy match", () => {
		const either = true
			? DEither.boolFalsy(null)
			: DEither.boolTruthy(true);

		const result = DEither.whenIsBoolFalsy(
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
			DEither.BoolTruthy<true> | null,
			"strict"
		>;
	});

	it("whenEitherIsBoolFalsy not match with right", () => {
		const either = DEither.boolTruthy(10);

		const result = DEither.whenIsBoolFalsy(
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
			DEither.BoolTruthy<10>,
			"strict"
		>;
	});

	it("whenEitherIsBoolFalsy not match with left", () => {
		const either = true
			? DEither.fail()
			: DEither.boolFalsy(null);

		const result = DEither.whenIsBoolFalsy(
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

	it("whenEitherIsBoolFalsy match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = DEither.whenIsBoolFalsy(
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
			DEither.BoolTruthy<10> | 0,
			"strict"
		>;
	});

	it("whenEitherIsBoolFalsy not match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = DEither.whenIsBoolFalsy(
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

		expect(result).toStrictEqual(DEither.boolTruthy(10));

		type check = ExpectType<
			typeof result,
			DEither.BoolTruthy<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? DEither.boolFalsy(null)
				: DEither.boolTruthy(true),
			DEither.whenIsBoolFalsy(
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
				DEither.BoolTruthy<true> | null,
				"strict"
			>;
	});
});
