import { createEitherFutureError } from "@scripts/either";

it("createEitherFutureError", () => {
	expect(createEitherFutureError(1)).toStrictEqual({
		"kind-either-error": null,
		"kind-either-future": null,
		"kind-either-information": "future",
		"kind-either-left": null,
		value: 1,
	});
});
