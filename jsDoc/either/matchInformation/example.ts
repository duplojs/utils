import { E, pipe } from "@scripts";

const result1 = E.matchInformation(
	true
		? E.right("success", 10)
		: E.left("failure", "error"),
	{
		success: (value) => value + 1,
		failure: (value) => value,
	},
);
// type: number | "error"

const result2 = pipe(
	true
		? E.ok()
		: E.fail(),
	E.matchInformation({
		ok: () => "ok" as const,
		fail: () => "fail" as const,
	}),
);
// type: "ok" | "fail"

const result3 = E.matchInformation(
	30,
	{},
);
// type: 30
