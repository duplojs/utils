import { wrapValue, keyKindPrefix, DEither } from "@scripts";

it("createEitherFutureError", () => {
	expect(DEither.futureError(1)).toStrictEqual({
		[`${keyKindPrefix}${DEither.futureErrorKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.futureKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "future",
		[`${keyKindPrefix}${DEither.leftKind.definition.name}`]: null,
		...wrapValue(1),
	});
});
