import { C } from "@scripts";

const label = C.String.createOrThrow("DuploJS");

C.lengthGreaterThan(label, 3); // true

if (C.lengthGreaterThan(label, 5)) {
	// label has length greater than 5
}
