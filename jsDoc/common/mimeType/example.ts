import { mimeType } from "@scripts";

const jsonType = mimeType.get("json");
// jsonType: "application/json"
const svgType = mimeType.get("svg");
// svgType: "image/svg+xml"
const unknownType = mimeType.get("unknown");
// unknownType: undefined

mimeType.set("txtnull", "text-null/plain");
const customType = mimeType.get("txtnull");
// customType: "text-null/plain"
