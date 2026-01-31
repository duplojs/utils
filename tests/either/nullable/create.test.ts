import { DEither, pipe, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

describe("createEitherNullable", () => {
	it("create EitherNullableEmpty", () => {
		const either = DEither.nullable(null);

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

	it("create EitherNullableFilled", () => {
		const either = DEither.nullable(10);

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

	it("use in pipe", () => {
		const result = pipe(
			"test" as string | null,
			DEither.nullable,
		);

		expect(result).toStrictEqual(DEither.nullable("test"));

		type check = ExpectType<
			typeof result,
			DEither.NullableEmpty | DEither.NullableFilled<string>,
			"strict"
		>;
	});
});
