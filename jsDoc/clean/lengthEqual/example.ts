import { C } from "@scripts";

const token = C.String.createOrThrow("abcd");

C.lengthEqual(token, 4); // true

if (C.lengthEqual(token, 4)) {
	// token has length 4
}
