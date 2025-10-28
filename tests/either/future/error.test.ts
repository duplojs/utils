import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { futureError } from "@scripts/either";
import { eitherInformationKind } from "@scripts/either/base";
import { eitherLeftKind } from "@scripts/either/left/create";
import { eitherFutureKind } from "@scripts/either/future/base";
import { eitherFutureErrorKind } from "@scripts/either/future/error";

it("createEitherFutureError", () => {
	expect(futureError(1)).toStrictEqual({
		[`${keyKindPrefix}${eitherFutureErrorKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherFutureKind.definition.name}`]: null,
		[`${keyKindPrefix}${eitherInformationKind.definition.name}`]: "future",
		[`${keyKindPrefix}${eitherLeftKind.definition.name}`]: null,
		...wrapValue(1),
	});
});
