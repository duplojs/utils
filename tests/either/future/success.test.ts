import { createEitherFutureSuccess } from "@scripts/either";

it("createEitherFutureSuccess", () => {
	expect(createEitherFutureSuccess(1)).toStrictEqual({
		"kind-either-success": null,
		"kind-either-future": null,
		"kind-either-information": "future",
		"kind-either-right": null,
		value: 1,
	});
});
