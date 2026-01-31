import { DArray, DEither, pipe, wrapValue, keyKindPrefix, type ExpectType } from "@scripts";

describe("createEitherBool", () => {
	const expectedBoolFalsy = (value: unknown) => ({
		[`${keyKindPrefix}${DEither.boolKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.boolFalsyKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "bool",
		[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
		...wrapValue(value),
	});

	const expectedBoolTruthy = (value: unknown) => ({
		[`${keyKindPrefix}${DEither.boolKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.boolTruthyKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "bool",
		[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
		...wrapValue(value),
	});

	it("falsy undefined", () => {
		const either = DEither.bool(undefined);

		expect(either).toStrictEqual(expectedBoolFalsy(undefined));

		type check = ExpectType<
			typeof either,
			DEither.BoolFalsy<undefined>,
			"strict"
		>;
	});

	it("falsy null", () => {
		const either = DEither.bool(null);

		expect(either).toStrictEqual(expectedBoolFalsy(null));

		type check = ExpectType<
			typeof either,
			DEither.BoolFalsy<null>,
			"strict"
		>;
	});

	it("falsy empty string", () => {
		const either = DEither.bool("");

		expect(either).toStrictEqual(expectedBoolFalsy(""));

		type check = ExpectType<
			typeof either,
			DEither.BoolFalsy<"">,
			"strict"
		>;
	});

	it("falsy 0", () => {
		const either = DEither.bool(0);

		expect(either).toStrictEqual(expectedBoolFalsy(0));

		type check = ExpectType<
			typeof either,
			DEither.BoolFalsy<0>,
			"strict"
		>;
	});

	it("falsy false", () => {
		const either = DEither.bool(false);

		expect(either).toStrictEqual(expectedBoolFalsy(false));

		type check = ExpectType<
			typeof either,
			DEither.BoolFalsy<false>,
			"strict"
		>;
	});

	it("truthy object", () => {
		const either = DEither.bool({});

		expect(either).toStrictEqual(expectedBoolTruthy({}));

		type check = ExpectType<
			typeof either,
			DEither.BoolTruthy<{}>,
			"strict"
		>;
	});

	it("truthy true", () => {
		const either = DEither.bool(true);

		expect(either).toStrictEqual(expectedBoolTruthy(true));

		type check = ExpectType<
			typeof either,
			DEither.BoolTruthy<true>,
			"strict"
		>;
	});

	it("truthy number", () => {
		const either = DEither.bool(10);

		expect(either).toStrictEqual(expectedBoolTruthy(10));

		type check = ExpectType<
			typeof either,
			DEither.BoolTruthy<10>,
			"strict"
		>;
	});

	it("truthy string", () => {
		const either = DEither.bool("test");

		expect(either).toStrictEqual(expectedBoolTruthy("test"));

		type check = ExpectType<
			typeof either,
			DEither.BoolTruthy<"test">,
			"strict"
		>;
	});

	it("bool large string", () => {
		const either = DEither.bool("test" as string);

		expect(either).toStrictEqual(expectedBoolTruthy("test"));

		type check = ExpectType<
			typeof either,
			DEither.BoolTruthy<string> | DEither.BoolFalsy<"">,
			"strict"
		>;
	});

	it("bool large number", () => {
		const either = DEither.bool(1 as number);

		expect(either).toStrictEqual(expectedBoolTruthy(1));

		type check = ExpectType<
			typeof either,
			DEither.BoolTruthy<number> | DEither.BoolFalsy<0>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			["test"],
			DArray.find((value) => value === "toto"),
			DEither.bool,
		);

		expect(result).toStrictEqual(DEither.bool(undefined));

		type check = ExpectType<
			typeof result,
			DEither.BoolFalsy<undefined> | DEither.BoolTruthy<"toto">,
			"strict"
		>;
	});
});
