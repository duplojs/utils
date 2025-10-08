import { wrapValue } from "@scripts/common";
import { keyKindPrefix } from "@scripts/common/kind";
import { futureSuccess } from "@scripts/either";

it("createEitherFutureSuccess", () => {
	expect(futureSuccess(1)).toStrictEqual({
		[`${keyKindPrefix}either-future-success`]: null,
		[`${keyKindPrefix}either-future`]: null,
		[`${keyKindPrefix}either-information`]: "future",
		[`${keyKindPrefix}either-right`]: null,
		...wrapValue(1),
	});
});
