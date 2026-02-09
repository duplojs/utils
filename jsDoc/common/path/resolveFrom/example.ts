import { Path } from "@scripts";

const absoluteResult = Path.resolveFrom("/root", ["alpha", "beta"]);
// absoluteResult: "/root/alpha/beta"

const overrideResult = Path.resolveFrom("gamma", ["alpha", "/root", "beta"]);
// overrideResult: "/root/beta"

const relativeResult = Path.resolveFrom("alpha", ["..", ".."]);
// relativeResult: null

const blockedResult = Path.resolveFrom("/root", ["..", "etc"], {
	stayInOrigin: true,
});
// blockedResult: null
