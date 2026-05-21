import { E } from "@scripts";

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
);
// type: E.Result<"user.skipped", undefined>

const computed = E.result(
	"invoice.total",
	1250,
);
// type: E.Result<"invoice.total", 1250>
