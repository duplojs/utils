import { Path, unwrap, pipe } from "@scripts";

const absoluteResult = Path.resolveFrom(["alpha", "beta"], "/root");
// absoluteResult: DEither.success<"/root/alpha/beta">
const result = unwrap(absoluteResult);
// result: "/root/alpha/beta"

const overrideResult = Path.resolveFrom(["alpha", "/root", "beta"], "gamma");
// overrideResult: DEither.success<"/root/beta">
const relativeResult = Path.resolveFrom(["..", ".."], "alpha");
// relativeResult: DEither.fail

const curriedResult = pipe(
	["alpha", "beta"],
	Path.resolveFrom("/root"),
);
// curriedResult: DEither.success("/root/alpha/beta")
