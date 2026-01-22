import { Path, unwrap } from "@scripts";

const absoluteResult = Path.resolveFrom("/root", ["alpha", "beta"]);
// absoluteResult: DEither.success<"/root/alpha/beta">
const result = unwrap(absoluteResult);
// result: "/root/alpha/beta"

const overrideResult = Path.resolveFrom("gamma", ["alpha", "/root", "beta"]);
// overrideResult: DEither.success<"/root/beta">
const relativeResult = Path.resolveFrom("alpha", ["..", ".."]);
// relativeResult: DEither.fail
