import { DEither, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

it("createEitherRight", () => {
	const either = DEither.right("info", 50);

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "info",
		[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
		...wrapValue(50),
	});

	type check = ExpectType<
		typeof either,
		DEither.Right<"info", 50>,
		"strict"
	>;
});
