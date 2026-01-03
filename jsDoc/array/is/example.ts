import { A } from "@scripts";

A.is([1, 2]); // true

A.is("alpha"); // false

const value: unknown = ["beta"];
if (A.is(value)) {
	// value is unknown[]
}
