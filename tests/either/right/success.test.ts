import { wrapValue, keyKindPrefix, type ExpectType, DEither } from "@scripts";

it("createEitherSuccess", () => {
	const either = DEither.success(50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${DEither.successKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "success",
		[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		DEither.Success<50>,
		"strict"
	>;
});
