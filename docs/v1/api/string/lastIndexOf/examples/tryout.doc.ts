import { DString } from "@duplojs/utils";

const input = "DuploJS Utils";
const result = DString.lastIndexOf(input, "JS");
// result: 5
const result2 = DString.lastIndexOf(input, "JS", 5);
// result2: undefined
