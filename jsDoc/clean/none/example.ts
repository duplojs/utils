import { C, pipe, type ExpectType } from "@scripts";

const noUser = C.none("User");
// noUser: C.None<"User">

const noOrder = C.none("Order");
// noOrder: C.None<"Order">

const pipedNone = pipe(
	"Invoice",
	C.none,
);

type check = ExpectType<
	typeof pipedNone,
	C.None<"Invoice">,
	"strict"
>;
