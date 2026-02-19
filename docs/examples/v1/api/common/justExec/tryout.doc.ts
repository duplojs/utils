import { type ExpectType, justExec } from "@duplojs/utils";

const directResult = justExec(
	() => ({
		status: "ok" as const,
		code: 200 as const,
	}),
);

type directCheck = ExpectType<
	typeof directResult,
	{
		status: "ok";
		code: 200;
	},
	"strict"
>;
