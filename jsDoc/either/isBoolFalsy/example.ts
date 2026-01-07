import { E } from "@scripts";

const maybeInput = E.bool(true ? true : null);

if (E.isBoolFalsy(maybeInput)) {
	// type: E.EitherBoolFalsy<null>
}
