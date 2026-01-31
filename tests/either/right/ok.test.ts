import { DEither, wrapValue, type ExpectType, keyKindPrefix } from "@scripts";

it("createEitherOk", () => {
	const either = DEither.ok();

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${DEither.okKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "ok",
		[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
		...wrapValue(undefined),
	});

	type check = ExpectType<
		typeof either,
		DEither.Ok,
		"strict"
	>;
});
