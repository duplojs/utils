import { wrapValue, keyKindPrefix, type ExpectType, DEither } from "@scripts";

it("createEitherFail", () => {
	const either = DEither.fail();

	expect(either).toStrictEqual({
		[`${keyKindPrefix}${DEither.failKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "fail",
		[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
		...wrapValue(undefined),
	});

	type check = ExpectType<
		typeof either,
		DEither.Fail,
		"strict"
	>;
});
