import { Path } from "@scripts";

const basicResult = Path.resolveRelative(["alpha", "beta"]);
// basicResult: "/alpha/beta"
const overrideResult = Path.resolveRelative(["alpha", "/root", "beta"]);
// overrideResult: "/root/beta"
const parentResult = Path.resolveRelative(["alpha", "..", "..", "beta"]);
// parentResult: "../beta"
