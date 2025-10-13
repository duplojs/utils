import { DString } from "@duplojs/utils";

const input = "DuploJS Utils";
const result = DString.substring(input, 7);
// result: " Utils"
const result2 = DString.substring(input, 0, 6);
// result2: "DuploJ"
