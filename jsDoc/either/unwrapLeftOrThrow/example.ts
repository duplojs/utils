import { E, pipe } from "@scripts";

const reason = E.unwrapLeftOrThrow(
	E.left("user.rejected", "missing email"),
);
// type: "missing email"

const error = E.unwrapLeftOrThrow(
	E.error("invalid payload"),
);
// type: "invalid payload"

const value = pipe(
	E.left("invoice.blocked", 403),
	E.unwrapLeftOrThrow,
);
// type: 403
