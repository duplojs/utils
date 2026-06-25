import { E, pipe, type ExpectType } from "@scripts";

const created = E.result(
	"user.created",
	{
		id: 1,
		name: "Ada",
	},
);
// type: E.Result<"user.created", { readonly id: 1; readonly name: "Ada"; }>

const skipped = E.result(
	"user.skipped",
	undefined,
);
// type: E.Result<"user.skipped", undefined>

const computed = E.result(
	"invoice.total",
	1250,
);
// type: E.Result<"invoice.total", 1250>

const piped = pipe(
	1250,
	E.result("invoice.total"),
);

type checkPiped = ExpectType<
	typeof piped,
	E.Result<"invoice.total", 1250>,
	"strict"
>;
