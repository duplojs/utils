import { Path } from "@scripts";

const simpleResult = Path.resolveFrom(["alpha", "beta"], "gamma");
// simpleResult: "gamma/beta/alpha"
const absoluteResult = Path.resolveFrom(["alpha", "/root", "beta"], "gamma");
// absoluteResult: "/root/alpha"
const curriedResult = Path.resolveFrom("/root")(["alpha", "beta"]);
// curriedResult: "/root/beta/alpha"
