import { E, pipe } from "@scripts";

const amount = E.unwrapByInformationOrThrow(
	E.right("payment.accepted", 120),
	"payment.accepted",
);
// type: 120

const payload = E.unwrapByInformationOrThrow(
	true
		? E.left("payment.rejected", "insufficient funds")
		: E.left("payment.accepted", 120),
	["payment.accepted", "payment.rejected"],
);
// type: 120 | "insufficient funds"

const total = pipe(
	true
		? E.result("invoice.total", 450)
		: E.result("invoice.fallback", null),
	E.unwrapByInformation(["invoice.total", "invoice.fallback"]),
);
// type: 450
