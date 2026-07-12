import { Path } from "@duplojs/utils";

const samePath = Path.computeRelativeFromTo("/project/src", "/project/src");
// samePath: "."
const childPath = Path.computeRelativeFromTo("/project/src", "/project/src/components");
// childPath: "components"
const siblingPath = Path.computeRelativeFromTo("/project/src/components", "/project/src/assets");
// siblingPath: "../assets"
const invalidPath = Path.computeRelativeFromTo("project/src", "/project/src/assets");
// invalidPath: null
