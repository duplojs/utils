import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { futureSuccess } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/kind";
import { eitherFutureKind } from "@scripts/either/future/base";
import { eitherFutureSuccessKind } from "@scripts/either/future/success";
import { eitherRightKind } from "@scripts/either/right/create";

it("createEitherFutureSuccess", () => {
	expect(futureSuccess(1)).toStrictEqual({
		[`${keyKindPrefix}${eitherFutureSuccessKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherFutureKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "future",
		[`${keyKindPrefix}${eitherRightKind.definition.name}`]: null,
		...wrapValue(1),
	});
});
