import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("createEitherNullish", () => {
	const expectedNullishEmpty = (value: unknown) => ({
		[`${keyKindPrefix}${DEither.nullishKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.nullishEmptyKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "nullish",
		[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
		...wrapValue(value),
	});

	const expectedNullishFilled = (value: unknown) => ({
		[`${keyKindPrefix}${DEither.nullishKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.nullishFilledKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "nullish",
		[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
		...wrapValue(value),
	});

	it("nullish undefined", () => {
		const either = DEither.nullish(undefined);

		expect(either).toStrictEqual(expectedNullishEmpty(undefined));

		type check = ExpectType<
			typeof either,
			DEither.NullishEmpty<undefined>,
			"strict"
		>;
	});

	it("nullish null", () => {
		const either = DEither.nullish(null);

		expect(either).toStrictEqual(expectedNullishEmpty(null));

		type check = ExpectType<
			typeof either,
			DEither.NullishEmpty<null>,
			"strict"
		>;
	});

	it("nullish number", () => {
		const either = DEither.nullish(10);

		expect(either).toStrictEqual(expectedNullishFilled(10));

		type check = ExpectType<
			typeof either,
			DEither.NullishFilled<10>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"test" as string | null,
			DEither.nullish,
		);

		expect(result).toStrictEqual(DEither.nullish("test"));

		type check = ExpectType<
			typeof result,
			DEither.NullishEmpty<null> | DEither.NullishFilled<string>,
			"strict"
		>;
	});
});
