import { Path } from "@scripts";

const trimmedTrailing = Path.fix("alpha/beta/");
// trimmedTrailing: "alpha/beta"
const trimmedRelative = Path.fix("./alpha/beta");
// trimmedRelative: "alpha/beta"
const cleanedBoth = Path.fix("./alpha/");
// cleanedBoth: "alpha"
