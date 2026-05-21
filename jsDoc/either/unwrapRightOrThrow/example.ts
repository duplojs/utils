import { E, pipe } from "@scripts";

const price = E.unwrapRightOrThrow(
	E.right("price.computed", 24),
);
// type: 24

const empty = E.unwrapRightOrThrow(
	E.success("ok"),
);
// type: "ok"

const total = pipe(
	E.result("invoice.total", 1200),
	E.unwrapRightOrThrow,
);
// type: 1200
