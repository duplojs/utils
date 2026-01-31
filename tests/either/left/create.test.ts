import { wrapValue, keyKindPrefix, type ExpectType, DEither } from "@scripts";

it("createEitherLeft", () => {
	const either = DEither.left("info", 50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "info",
		[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		DEither.Left<"info", 50>,
		"strict"
	>;
});
