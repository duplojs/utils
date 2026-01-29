import { mimeType } from "@duplojs/utils";

const jsonType = mimeType.get("json");
// jsonType: "application/json"

const svgType = mimeType.get("svg");
// svgType: "image/svg+xml"

const missingType = mimeType.get("unknown");
// missingType: undefined
