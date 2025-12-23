import { C } from "@duplojs/utils";

const value = C.Number.createOrThrow(5);

if (C.lessThan(value, 10)) {
	// ...
} else {
	// ...
}
