import { E } from "@scripts";

const result = true
	? E.ok()
	: E.fail();

if (E.isRight(result)) {
	// type: E.Ok
}

