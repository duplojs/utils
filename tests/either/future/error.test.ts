import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { futureError } from "@scripts/either";

it("createEitherFutureError", () => {
	expect(futureError(1)).toStrictEqual({
		[`${keyKindPrefix}either-future-error`]: null,
		[`${keyKindPrefix}either-future`]: null,
		[`${keyKindPrefix}either-information`]: "future",
		[`${keyKindPrefix}either-left`]: null,
		...wrapValue(1),
	});
});
