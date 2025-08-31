import { createFutureError } from "@scripts/either";

it("createEitherFutureError", () => {
	expect(createFutureError(1)).toStrictEqual({
		"kind-either-error": null,
		"kind-either-future": null,
		"kind-either-information": "future",
		"kind-either-left": null,
		value: 1,
	});
});
