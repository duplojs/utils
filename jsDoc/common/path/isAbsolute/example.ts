import { Path } from "@scripts";

const absolutePath = Path.isAbsolute("/var/log");
// absolutePath: true
const parentTraversal = Path.isAbsolute("/var/../log");
// parentTraversal: false
const relativePath = Path.isAbsolute("var/log");
// relativePath: false
