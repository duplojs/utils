import { C } from "@scripts";

const code = C.String.createOrThrow("AB");

C.lengthLessThan(code, 5); // true

if (C.lengthLessThan(code, 3)) {
	// code has length less than 3
}
