import { wrapValue, keyKindPrefix, DEither } from "@scripts";

it("createEitherFutureSuccess", () => {
	expect(DEither.futureSuccess(1)).toStrictEqual({
		[`${keyKindPrefix}${DEither.futureSuccessKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.futureKind.definition.name}`]: null,
		[`${keyKindPrefix}${DEither.informationKind.definition.name}`]: "future",
		[`${keyKindPrefix}${DEither.rightKind.definition.name}`]: null,
		...wrapValue(1),
	});
});
