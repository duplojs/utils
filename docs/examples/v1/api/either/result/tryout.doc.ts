import { E, pipe, type ExpectType } from "@duplojs/utils";

const createdResult = E.result(
	"user.created",
	{
		id: 1,
		name: "Ada",
	},
);

const skippedResult = E.result(
	"user.skipped",
	undefined,
);

const totalResult = pipe(
	1250,
	E.result("invoice.total"),
);

type checkCreated = ExpectType<
	typeof createdResult,
	E.Result<
		"user.created",
		{
			readonly id: 1;
			readonly name: "Ada";
		}
	>,
	"strict"
>;

type checkSkipped = ExpectType<
	typeof skippedResult,
	E.Result<"user.skipped", undefined>,
	"strict"
>;

type checkTotal = ExpectType<
	typeof totalResult,
	E.Result<"invoice.total", 1250>,
	"strict"
>;
