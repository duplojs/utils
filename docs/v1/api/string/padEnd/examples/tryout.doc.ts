import { DString } from "@duplojs/utils";

const input = "abc";
const result = DString.padEnd(input, 6, ".");
// result: "abc..."
