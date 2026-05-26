import { E, pipe } from "@scripts";

const reason = E.unwrapLeft(
	E.left("payment.rejected", "insufficient funds"),
);
// type: "insufficient funds"

const unchanged = E.unwrapLeft(
	E.right("payment.accepted", 120),
);
// type: E.Right<"payment.accepted", 120>

const fallback = pipe(
	E.error("network down"),
	E.unwrapLeft,
);
// type: "network down"
