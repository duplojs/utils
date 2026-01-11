import { E } from "@scripts";

const result = false
	? E.ok()
	: E.fail();

if (E.isLeft(result)) {
	// type: E.EitherFail
}
