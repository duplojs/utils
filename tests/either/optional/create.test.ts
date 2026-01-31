import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("createEitherOptional", () => {
	it("create EitherOptionalEmpty", () => {
		const either = DEither.optional(undefined);

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

	it("create EitherOptionalFilled", () => {
		const either = DEither.optional(10);

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

	it("use in pipe", () => {
		const result = pipe(
			"test" as string | undefined,
			DEither.optional,
		);

		expect(result).toStrictEqual(DEither.optional("test"));

		type check = ExpectType<
			typeof result,
			DEither.OptionalEmpty | DEither.OptionalFilled<string>,
			"strict"
		>;
	});
});
