import { futureSuccess } from "@scripts/either";

it("createEitherFutureSuccess", () => {
	expect(futureSuccess(1)).toStrictEqual({
		"kind-either-future-success": null,
		"kind-either-future": null,
		"kind-either-information": "future",
		"kind-either-right": null,
		value: 1,
	});
});
