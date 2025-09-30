import { wrapValue } from "@scripts/common";
import { futureError } from "@scripts/either";

it("createEitherFutureError", () => {
	expect(futureError(1)).toStrictEqual({
		"kind-either-future-error": null,
		"kind-either-future": null,
		"kind-either-information": "future",
		"kind-either-left": null,
		...wrapValue(1),
	});
});
