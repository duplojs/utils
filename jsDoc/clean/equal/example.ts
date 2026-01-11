import { C } from "@scripts";

const status = C.String.createOrThrow("paid");

if (C.equal(status, "paid")) {
	// status is C.Primitive<"paid">
}

const paid = C.String.createOrThrow("paid");

if (C.equal(status, paid)) {
	// status is C.Primitive<"paid">
}
