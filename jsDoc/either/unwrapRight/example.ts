import { E, pipe } from "@scripts";

const price = E.unwrapRight(
	E.right("price.loaded", 99),
);
// type: 99

const unchanged = E.unwrapRight(
	E.left("price.missing", "not found"),
);
// type: E.Left<"price.missing", "not found">

const total = pipe(
	E.result("invoice.total", 450),
	E.unwrapRight,
);
// type: 450
