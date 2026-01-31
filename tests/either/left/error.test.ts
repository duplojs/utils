import { wrapValue, keyKindPrefix, type ExpectType, DEither } from "@scripts";

it("createEitherError", () => {
	const either = DEither.error(50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${DEither.errorKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "error",
		[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		DEither.Error<50>,
		"strict"
	>;
});
