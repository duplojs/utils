import { Path } from "@duplojs/utils";

const absolutePath = Path.isAbsolute("/var/log");
// absolutePath: true
const parentTraversal = Path.isAbsolute("/var/../log");
// parentTraversal: false
const relativePath = Path.isAbsolute("var/log");
// relativePath: false
