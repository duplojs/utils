import { E, pipe, type ExpectType } from "@duplojs/utils";

const matchedResult = E.matchInformation(
	true
		? E.right("success", 10)
		: E.left("failure", "error"),
	{
		success: (value) => value + 1,
		failure: (value) => value,
	},
);

type matchedCheck = ExpectType<
	typeof matchedResult,
	number | "error",
	"strict"
>;

const pipedResult = pipe(
	true
		? E.ok()
		: E.fail(),
	E.matchInformation({
		ok: () => "ok" as const,
		fail: () => "fail" as const,
	}),
);

type pipedCheck = ExpectType<
	typeof pipedResult,
	"ok" | "fail",
	"strict"
>;
