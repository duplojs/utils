import { E, pipe } from "@scripts";

const amount = E.unwrapByInformationOrThrow(
	E.right("payment.accepted", 120),
	"payment.accepted",
);
// type: 120

const reason = E.unwrapByInformationOrThrow(
	"payment.rejected",
)(
	E.left("payment.rejected", "insufficient funds"),
);
// type: "insufficient funds"

const total = pipe(
	E.result("invoice.total", 450),
	E.unwrapByInformationOrThrow("invoice.total"),
);
// type: 450
