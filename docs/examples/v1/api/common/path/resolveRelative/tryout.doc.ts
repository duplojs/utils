import { Path } from "@duplojs/utils";

const basic = Path.resolveRelative(["alpha", "beta"]);
// basic: "/alpha/beta"
const override = Path.resolveRelative(["alpha", "/root", "beta"]);
// override: "/root/beta"
const parent = Path.resolveRelative(["alpha", "..", "..", "beta"]);
// parent: "../beta"
