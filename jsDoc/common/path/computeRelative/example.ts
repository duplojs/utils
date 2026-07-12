import { Path } from "@scripts";

const samePath = Path.computeRelative("/project/src", "/project/src");
// samePath: "."

const childPath = Path.computeRelative("/project/src", "/project/src/components");
// childPath: "components"

const siblingPath = Path.computeRelative("/project/src/components", "/project/src/assets");
// siblingPath: "../assets"

const invalidPath = Path.computeRelative("project/src", "/project/src/assets");
// invalidPath: null
